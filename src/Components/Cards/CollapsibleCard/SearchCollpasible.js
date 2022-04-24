import React, { useState } from "react";
import ContentCard from "./ContentCard";
import "./SearchCollapsible.css";

export default function SearchBarCollapsible(props) {
  function createContentCard(category, name, description, price, index) {
    return (
      <ContentCard
        key={index}
        foodCategory={category}
        foodItem={name}
        foodDescription={description}
        foodPrice={price}
        isSearchOn={props.isSearchOn}
      ></ContentCard>
    );
  }

  return (
    <div className="menu-div">
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
