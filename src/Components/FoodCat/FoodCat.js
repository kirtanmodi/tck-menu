import React from "react";
import "./FoodCat.css";

export default function FoodCat(props) {
  return (
    <span className={"food-cat " + props.foodCategory}>
      {props.foodCategory}
    </span>
  );
}
