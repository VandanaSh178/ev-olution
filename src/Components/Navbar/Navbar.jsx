import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <div className="nav-logo">EV-olution</div>

      {/* Hamburger Icon */}
    <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>


      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" className="nav-contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
