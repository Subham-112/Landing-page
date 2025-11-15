import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">WISBOX</Link>
        </div>
        
        <ul className="navbar-menu">
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/vendors">VENDOR</Link></li>
        </ul>
        
        <div className="navbar-location">
          <Link to="/bhubaneswar">BHUBANESWAR</Link>
        </div>
      </div>
    </nav>
  );
}