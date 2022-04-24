// import React from "react";
// import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const currentDay = date.getDay();

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

export default { currentDay };
