import React from 'react';
import authorImg from '../assets/profile_picture.jpg';
import fbIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter-icon.svg';
import instaIcon from '../assets/instagram-icon.svg';

export default function AuthorBio() {
  return (
    <section className="author-section">
      {/* Left: Heading and Bio text */}
      <div className="author-info">
        <h3 className="section-heading">The Author</h3>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
        </p>
      </div>

      {/* Center: 200px Circular Profile Picture */}
      <div className="author-photo-wrapper">
        <img src={authorImg} alt="The Author" className="author-photo" />
      </div>

      {/* Right: Vertical column of 50px social icons */}
      <div className="author-socials">
        <a href="#facebook"><img src={fbIcon} alt="Facebook" /></a>
        <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#instagram"><img src={instaIcon} alt="Instagram" /></a>
      </div>
    </section>
  );
}