// src/components/MovieSection.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieSection = ({ title, movies }) => {
  return (
    <section className="movie-section">
      <div className="section-header">
        <h3>{title}</h3>
        <span className="view-all">View All</span>
      </div>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            time={movie.time}
            imageUrl={movie.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
