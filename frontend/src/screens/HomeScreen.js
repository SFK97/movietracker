import React from "react";
import "./HomeScreen.css";
import { AddToList } from "../components/AddToList/AddToList";
import { UpcomingMovies } from "../components/Upcoming/UpcomingMovies";
import { LatestMovies } from "../components/Latest/LatestMovies";

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen">
        <div className="content__wrapper">
          <h1 className="homescreen__title">Welcome to Movie Tracker</h1>
          <div className="search__bar">
            <AddToList />
          </div>
          <div className="content">
            <div className="left__column">
              <LatestMovies />
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
