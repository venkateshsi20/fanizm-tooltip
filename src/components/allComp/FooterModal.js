import React from "react";
// import "./RedBorderModal.css";

const FooterModal = () => {
  return (
    <div className="red-border-modal">
      <div className="option">
        <label htmlFor="megaQuizzes">Mega Quizzes</label>
        <input type="radio" id="megaQuizzes" name="quizOption" />
      </div>
      <div className="option">
        <label htmlFor="headToHead">Head to Head</label>
        <input type="radio" id="headToHead" name="quizOption" />
      </div>
      <div className="option">
        <label htmlFor="trivia">Trivia</label>
        <input type="radio" id="trivia" name="quizOption" />
      </div>
    </div>
  );
};

export default FooterModal;
