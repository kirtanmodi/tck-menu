import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  function handleChange(e) {
    const value = e.target.value;
    props.searchValue(value);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
      <button href="##" className="icon">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
