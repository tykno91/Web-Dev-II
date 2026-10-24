import React from 'react';
import fbIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter-icon.svg';
import instaIcon from '../assets/instagram-icon.svg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <a href="#blog">Our Blog</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>

        <p className="footer-copyright">
          Copyright © 2023 Erased Disks Ltd.
        </p>

        <div className="footer-socials">
          <a href="#facebook"><img src={fbIcon} alt="Facebook" /></a>
          <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#instagram"><img src={instaIcon} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
}