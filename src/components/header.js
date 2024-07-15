// src/Header.js
import React, { useState, useEffect } from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // Adjust the offset value as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <h1>Architek</h1>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>
    </header>
  );
}

export default Header;
