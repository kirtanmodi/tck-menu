import React from "react";
import Logo from "../Logo/Logo";
import "./styles.css";

export default function Headers() {
  return (
    <div className="app-header">
      <h2 className="user">The Commoner's Cafe</h2>
      <Logo id="header-logo"></Logo>
    </div>
  );
}
