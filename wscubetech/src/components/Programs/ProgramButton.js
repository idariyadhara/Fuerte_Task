import React from "react";
import "./ProgramButton.css"; // Import CSS file


const ProgramButton = ({ program, onClick, isActive }) => {
  return (
    <button
      className={`program-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(program)}
    >
      {program}
    </button>
  );
};

export default ProgramButton;
