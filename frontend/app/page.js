// app/page.js
import './globals.css';

export default function HomePage() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Bank Churn Prediction Made Easy</h1>
        <p>Use AI to predict if a customer will leave your bank. Fast, accurate, and insightful.</p>
        <a href="/predict" className="cta-button">Try It Now</a>
      </div>
    </div>
  );
}
