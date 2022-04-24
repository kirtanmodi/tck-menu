import React from "react";
import "./FoodCat.css";

export default function FoodCat(props) {
  return (
    <span className={"food-cat " + props.foodCategory}>
      {props.foodCategory !== "Drink" && props.foodCategory}
    </span>
  );
}
