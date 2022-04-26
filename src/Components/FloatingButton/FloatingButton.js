import React, { useState } from "react";
import "./FLoatingButton.css";

export default function FloatingButton(props) {
  const allFoodList = props.allFoodList;
  const [menuButton, setMenuButton] = useState(false);

  function handleClick() {
    setMenuButton(!menuButton);
  }

  return (
    <div className="zoom">
      <button
        className="zoom-fab zoom-btn-large"
        id="zoomBtn"
        onClick={handleClick}
      >
        Menu
      </button>

      <div
        className={
          menuButton
            ? "zoom-card scale-transition scale-in"
            : "zoom-card scale-transition scale-out"
        }
      >
        {allFoodList.map((i, index) => {
          return (
            <div key={index} className="zoom-card-content">
              <a href={"#" + i.name}>{i.name.substr(0, 10)}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
