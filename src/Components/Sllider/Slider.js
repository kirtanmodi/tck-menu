import React, { useState } from "react";
import "./Slider.css";

export default function Slider(props) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    props.sliderChecked(props.foodCategory, !checked);
    setChecked(!checked);
  }

  return (
    <div className="slider-box">
      <p>{props.foodCategory}</p>
      <label htmlFor={props.foodCategory} className="switch">
        <input
          id={props.foodCategory}
          type="checkbox"
          name={props.foodCategory}
          checked={checked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
