// src/components/MovieCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, time, imageUrl, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const quizData = { title: title, time: time, imageUrl: imageUrl };

    navigate(`/${id}`, { state: quizData });
  };

  return (
    <div className="movie-card" onClick={() => handleNavigation()}>
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
