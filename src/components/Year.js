import React, { useState } from "react";
import "../styles/Year.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
export const Year = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; // Month is zero-based
  let displayYear;
  if (currentMonth >= 10) {
    displayYear = currentYear + 1;
  } else {
    displayYear = currentYear;
  }
  const options = [];
  for (let year = 2016; year <= 2024; year++) {
    options.push({
      value: `option${year}`,
      label: String(year),
    });
  }
  const defaultOption = options.find(
    (option) => option.label === String(displayYear)
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || { value: "", label: "Year" }
  );
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  global.years = selectedOption.label;
  console.log(global.years);
  return (
    <div>
      {" "}
      <div className="dropdown">
        <button className="dropdown__toggle" onClick={toggleDropdown}>
          {selectedOption.label}{" "}
          <ArrowDropDownIcon
            sx={{
              marginTop: "-5px",
              position: "absolute",
            }}
          />
        </button>
        {isOpen && (
          <ul className="dropdown__menu">
            {options.map((option) => (
              <li
                key={option.value}
                className="dropdown__menu-item"
                onClick={() => handleOptionClick(option)}
              >
                <span>{option.label}</span>
                <span className="dropdown__menu-item-description">
                  {option.description}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
