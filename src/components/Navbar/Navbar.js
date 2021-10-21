import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <div className="navbar__logo">Movie Tracker</div> */}
      <nav className="navbar">
        <ul className="navbar__links">
          <li>
            <Link to="/completedmovies">Completed</Link>
          </li>
          <li>
            <Link to="/upcomingmovies">Upcoming</Link>
          </li>
          <li>
            <Link to="/favouritemovies">Favourites</Link>
          </li>
          <li>
            <Link to="/addmovies">My List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
