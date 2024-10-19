// src/components/MovieCard.js
import React from "react";
import { FaCalendar, FaTrophy, FaBell } from "react-icons/fa"; // Icons used for the footer
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, time, imageUrl, id, coverImg }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const quizData = {
      title: title,
      time: time,
      imageUrl: imageUrl,
      coverImg: coverImg,
    };

    navigate(`/${id}`, { state: quizData });
  };

  return (
    <div className="movie-card" onClick={() => handleNavigation()}>
      <img src={imageUrl} alt={title} className="movie-image" />
      <div class="lqh-slide-body">
        <div class="time-countdown">
        <FaCalendar className="movie-cal-icon" />
          <span class="timer">22 Oct, 04:55 PM</span>
        </div>
        <div class="winning ">
          <FaTrophy className="movie-trophy-icon" />
          
          <span class="primary-color">Prizes</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
