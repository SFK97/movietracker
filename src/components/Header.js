import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="main">
          <div className="title">
            <Link to="/">WatchList</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/completedmovies">Completed Movies</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/addtolist" className="add">
                Add To List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
