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
        isSearchOn={props.isSearchOn}
        catChecked={props.catChecked}
      ></ContentCard>
    );
  }

  return (
    <div className="menu-div">
      {/* <div className="genre-box"></div> */}
      <div
        id={props.foodGenre}
        name="collapsible"
        className="collapsible"
        onClick={HandleClick}
      >
        {props.foodGenre}
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
