import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-logo">Wisbox</span>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link active">
            About
          </Link>
          <Link to="/vendors" className="nav-link">VENDOR</Link>
          <Link href="#" className="nav-link download-btn">
            <span className="download-icon">⬇</span> Download App
          </Link>
        </div>
      </div>
    </nav>
  );
}
