// app/components/Footer.js
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ChurnPredict. All rights reserved.</p>
    </footer>
  );
}
