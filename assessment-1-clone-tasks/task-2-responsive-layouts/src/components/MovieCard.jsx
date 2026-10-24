import React from 'react';

export default function MovieCard({ movie, layoutClass }) {
  return (
    <article className={`movie-card ${layoutClass}`}>
      <div className="poster-wrapper">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
      </div>
      <div className="movie-content">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.description}</p>
        <button className="watch-btn" type="button">WATCH NOW</button>
      </div>
    </article>
  );
}