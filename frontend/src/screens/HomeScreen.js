import React from "react";
import "./HomeScreen.css";
import { UpcomingMovies } from "../components/Upcoming/UpcomingMovies";

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen">
        <div className="content__wrapper">
          <h1 className="homescreen__title">Welcome to Movie Tracker</h1>
          <div className="content">
            <div className="left__column">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
            <div className="right__column">
              <h1>Upcoming Movies</h1>
              <UpcomingMovies />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
