from tensorflow import keras
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib

# Load the trained Keras model
model = keras.models.load_model('model.keras')
scaler = joblib.load("scaler.pkl")

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Bank Churn Prediction API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Convert input dict to DataFrame
    input_df = pd.DataFrame([data])

    # Scale the input using the same scaler
    input_scaled = scaler.transform(input_df)

    # Predict (returns a value between 0 and 1)
    prediction = model.predict(input_scaled)

    # Convert probability to binary class
    prob = prediction[0][0]
    result = int(prob > 0.5)
    percentage = round(float(prob) * 100, 2)  # ensure prob is float

    return jsonify({
        "prediction": result,
        "confidence_percent": f"{percentage}%",
        "probability": float(prob)  # ✅ convert to native float
    })

if __name__ == '__main__':
    app.run(debug=True)
