import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="search-box">
      <input type="text" placeholder={props.placeholder} />
      <button href="##" className="icon">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
