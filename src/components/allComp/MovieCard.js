// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ title, time, imageUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-image" />
      <div className="movie-info">
        <h4>{title}</h4>
        <p>{time}</p>
        <span className="prize-tag">🎁 Prizes</span>
      </div>
    </div>
  );
};

export default MovieCard;
