import React from 'react';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-container">
        <img src={logo} alt="Erased Tapes Logo" className="site-logo" />
      </div>
      <nav className="header-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  );
}