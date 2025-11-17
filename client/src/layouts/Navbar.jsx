import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isLoading = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLoaded = !isLoading;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`hm-navbar ${isLoaded ? 'loaded' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo navbar-item">
          <Link to="/">WISBOX</Link>
        </div>
        
        <ul className={`navbar-menu navbar-item ${isOpen ? 'active' : ''}`}>
          <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li><Link to="/vendors" onClick={closeMenu}>VENDOR</Link></li>
        </ul>
        
        <div className="navbar-location navbar-item">
          <Link to="/bhubaneswar">BHUBANESWAR</Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}