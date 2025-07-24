// app/components/Navbar.js
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo"><img src="./logo.png" alt="" />Churn Prediction</Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/predict">Predict</Link>
        </div>
      </div>
    </nav>
  );
}
