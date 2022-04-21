import React, { useState } from "react";
import ContentCard from "./ContentCard";
import "./styles.css";

export default function CollapsibleCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  function HandleClick() {
    setIsOpen(!isOpen);
  }

  function createContentCard(category, name, description, price, index) {
    return (
      <ContentCard
        key={index}
        funcPass={isOpen}
        foodCategory={category}
        foodItem={name}
        foodDescription={description}
        foodPrice={price}
      ></ContentCard>
    );
  }

  return (
    <div className="menu-div">
      <div className="genre-box">
        <div
          name="collapsible"
          type="button"
          className="collapsible"
          onClick={HandleClick}
        >
          {props.foodGenre}
        </div>
        <div className="genre-btn"> {isOpen ? "-" : "+"} </div>
      </div>
      {props.foodDetails.map((i, index) => {
        return createContentCard(
          i.category,
          i.item,
          i.description,
          i.price,
          index
        );
      })}
    </div>
  );
}
