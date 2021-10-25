import React from "react";
import "./HomeScreen.css";
import { Upcoming } from "../components/Upcoming/Upcoming";

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen">
        <h2 className="homescreen__title">Upcoming Movies</h2>
        <div className="upcoming__movies">
          <Upcoming />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
