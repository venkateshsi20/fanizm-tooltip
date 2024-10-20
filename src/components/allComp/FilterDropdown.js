import React, { useState } from 'react';


const FilterDropdown = ({ options, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onFilterChange(option);
    setIsOpen(false);
  };

  return (
    <div className="filter-dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption || 'Filter'}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
