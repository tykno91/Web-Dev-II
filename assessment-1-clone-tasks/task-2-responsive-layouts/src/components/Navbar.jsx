import React from 'react';

export default function Navbar() {
  return (
    <header className="watchit-header">
      <div className="header-inner">
        <h1 className="logo">watch.it</h1>
        <nav className="nav-links">
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#romance">Romance</a>
          <a href="#drama">Drama</a>
        </nav>
        <button className="search-btn" type="button">SEARCH</button>
      </div>
    </header>
  );
}