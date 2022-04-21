import React, { useState } from "react";
import "./styles.css";

export default function EditItems() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="edit-items-btn show">
      {/* <div onClick={HandleClick} className="edit-add-btn">
        Add
      </div> */}
      <button onClick={decrease} name="sub" className="edit-buttons">
        -
      </button>
      <div className="edit-values"> {count} </div>
      <button onClick={increase} name="add" className="edit-buttons">
        +
      </button>
    </div>
  );
}
