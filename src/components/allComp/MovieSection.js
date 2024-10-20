// src/components/MovieSection.js
import React from "react";
import MovieCard from "./MovieCard";
import Tippy from "@tippyjs/react";
import Tabs from "./Tab";
import FilterDropdown from "./FilterDropdown";

const MovieSection = ({ title, movies, step, setStep, isHighlight }) => {

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleFilterChange = (option) => {
    console.log('Selected option:', option);
  };

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];
  return (
    <>
    <div className="filter-container">
    <div className="tabs-wrap">
      <Tabs tabs={tabs} />
      </div>
      <div className="filter-wrap">
      <FilterDropdown options={options} onFilterChange={handleFilterChange} />
      </div>
      </div>
    <section className="movie-section">

      
      <div className="section-header">
        <h3>{title}</h3>
        <span className="view-all">View All</span>
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
                  type={movie.type}
                />
              </div>
            </Tippy>
          );
        })}
        {isHighlight ? <div className="movie-overlay" /> : null}
      </div>
    </section>

    </>
  );
};

export default MovieSection;
