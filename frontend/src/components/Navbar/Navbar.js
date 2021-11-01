import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          Movie Tracker
        </Link>
        <ul className="navbar__links">
          <li>
            <Link to="/completedmovies">Completed</Link>
          </li>
          <li>
            <Link to="/favouritemovies">Favourites</Link>
          </li>
          <li>
            <Link to="/watchlistmovies">WatchList</Link>
          </li>
        </ul>
        <Link
          className="button"
          to="/addmovies"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Add
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
