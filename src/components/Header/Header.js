import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__title">
          <Link to="/">Movie Tracker</Link>
        </div>
      </div>
    </header>
  );
};
