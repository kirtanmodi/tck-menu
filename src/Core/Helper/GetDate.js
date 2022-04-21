// import React from "react";
// import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

export default greeting;
