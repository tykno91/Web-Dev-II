import React from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import { movies } from './moviesData';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-container">
        <div className="movie-grid">
          {movies.map((movie, index) => {
            // Apply wireframe layout role: card 0 is featured, 1 & 2 are side-by-side, 3-5 are horizontal
            let layoutClass = 'card-stacked';
            if (index === 0) layoutClass = 'card-featured';
            else if (index === 1 || index === 2) layoutClass = 'card-column';
            else layoutClass = 'card-horizontal';

            return (
              <MovieCard key={movie.id} movie={movie} layoutClass={layoutClass} />
            );
          })}
        </div>
      </main>
    </div>
  );
}