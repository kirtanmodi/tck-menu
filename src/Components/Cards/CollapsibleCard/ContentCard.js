import React, { useRef } from "react";
import EditItems from "../../EditItems/EditItems";
import FoodCat from "../../FoodCat/FoodCat";
import "./styles.css";

export default function ContentCard(props) {
  const parentRef = useRef();
  const isOpen = props.funcPass;
  const isSearchOn = props.isSearchOn;
  const catChecked = props.catChecked;

  function createCategory(name, index) {
    return <FoodCat key={index} foodCategory={name}></FoodCat>;
  }

  return (
    <div
      className="content-parent"
      ref={parentRef}
      style={
        isSearchOn
          ? { height: "auto" }
          : isOpen
          ? { height: parentRef.current.scrollHeight ?? +"px" }
          : { height: "0px" }
      }
    >
      <div className="content">
        <div className="content-name-price">
          <p className="content-name">
            {props.foodItem}
            {props.foodCategory.map((i, index) => {
              return createCategory(i, index);
            })}
          </p>
          <p className="content-description">{props.foodDescription}</p>

          <div className="content-price-div">
            ₹
            {Object.entries(props.foodPrice).map((i, index) => {
              return (
                <p key={index} className="content-price">
                  {catChecked ? i[1][1] : i[1]}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
