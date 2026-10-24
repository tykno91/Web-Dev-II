import React from 'react';
import heroImg from '../assets/hero.png';
import album1 from '../assets/all-encores.jpg';
import album2 from '../assets/articulation.jpg';
import album3 from '../assets/blurred.jpg';
import album4 from '../assets/encores-2.jpg';

export default function ImageGallery() {
  return (
    <section className="image-gallery-container">
      {/* Featured Large Image on Left */}
      <div className="gallery-featured">
        <img src={heroImg} alt="Erased Tapes Featured Artwork" />
      </div>

      {/* 2x2 Grid of Album Artwork on Right */}
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={album1} alt="All Encores" />
        </div>
        <div className="gallery-item">
          <img src={album2} alt="Articulation" />
        </div>
        <div className="gallery-item">
          <img src={album3} alt="Blurred" />
        </div>
        <div className="gallery-item">
          <img src={album4} alt="Encores 2" />
        </div>
      </div>
    </section>
  );
}