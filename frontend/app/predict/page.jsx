'use client';
import { useState } from 'react';
import './page.css'

export default function PredictPage() {
  const [formData, setFormData] = useState({
    CreditScore: '',
    Age: '',
    Tenure: '',
    Balance: '',
    NumOfProducts: '',
    HasCrCard: '',
    IsActiveMember: '',
    EstimatedSalary: '',
    Germany: '',
    Spain: '',
    Male: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const res = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="predict-container">
      <div className="form">


        <div className="form-group">
  <label>Credit Score</label>
  <input type="number" name="CreditScore" value={formData.CreditScore} onChange={handleChange} required />
</div>
      <div className="form-group">
   <label>Has Credit Card</label>
  <select
    name="HasCrCard"
    value={formData.HasCrCard}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

<div className="form-group">
  <label>Age</label>
  <input type="number" name="Age" value={formData.Age} onChange={handleChange} required />
</div>

<div className="form-group">
  <label>Tenure</label>
  <input type="number" name="Tenure" value={formData.Tenure} onChange={handleChange} required />
</div>

<div className="form-group">
  <label>Balance</label>
  <input type="number" name="Balance" value={formData.Balance} onChange={handleChange} required />
</div>

<div className="form-group">
  <label>Number of Products</label>
  <input type="number" name="NumOfProducts" value={formData.NumOfProducts} onChange={handleChange} required />
</div>

<div className="form-group">
  <label>Is Active Member</label>
  <select
    name="IsActiveMember"
    value={formData.IsActiveMember}
    onChange={handleChange}
    required
  >
    <option value="">Select</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>



<div className="form-group">
  <label>Estimated Salary</label>
  <input type="number" name="EstimatedSalary" value={formData.EstimatedSalary} onChange={handleChange} required />
</div>

<div className="form-group">
  <label>Country</label>
  <select
    name="country"
    value={formData.Germany === '1' ? 'Germany' : formData.Spain === '1' ? 'Spain' : ''}
    onChange={(e) => {
      const selected = e.target.value;
      setFormData((prev) => ({
        ...prev,
        Germany: selected === 'Germany' ? '1' : '0',
        Spain: selected === 'Spain' ? '1' : '0'
      }));
    }}
    required
  >
    <option value="">Select Country</option>
    <option value="Germany">Germany</option>
    <option value="Spain">Spain</option>
  </select>
</div>

<div className="form-group">
  <label>Gender</label>
  <select
    name="Male"
    value={formData.Male}
    onChange={handleChange}
    required
  >
    <option value="">Select Gender</option>
    <option value="1">Male</option>
    <option value="0">Female</option>
  </select>
</div>
<button type="submit" onClick={handleSubmit}>Predict</button>
 {result && (
        <div className="result">
          <p><strong>Prediction:</strong> {result.prediction === 1 ? 'Will Exit' : 'Will Stay'}</p>
          <p><strong>Confidence:</strong> {result.confidence_percent}</p>
        </div>
      )}
</div>
    </div>
  );
}
