// src/components/MovieSection.js
import React from "react";
import MovieCard from "./MovieCard";
import Tippy from "@tippyjs/react";

const MovieSection = ({ title, movies, step, setStep, isHighlight }) => {
  return (
    <section className="movie-section">
      <div className="section-header">
        <h3>{title}</h3>
        {/* <span className="view-all">View All</span> */}
      </div>
      <div className="movie-grid">
        {movies.map((movie, index) => {
          let isHighlighted = index === 1 && step === 3; // Check if this movie should be highlighted

          return (
            <Tippy
              key={movie.id} // Unique id for Tippy
              theme="custom"
              animation="fade"
              visible={true}
              content={isHighlighted ? "This is a highlighted movie!" : ""}
              disabled={!isHighlighted} // Disable tooltip when not highlighted
            >
              <div>
                <MovieCard
                  title={movie.title}
                  time={movie.time}
                  imageUrl={movie.imageUrl}
                  id={movie.id}
                  coverImg={movie.coverImg}
                  isHighlighted={isHighlighted}
                />
              </div>
            </Tippy>
          );
        })}
        {isHighlight ? <div className="movie-overlay" /> : null}
      </div>
    </section>
  );
};

export default MovieSection;
