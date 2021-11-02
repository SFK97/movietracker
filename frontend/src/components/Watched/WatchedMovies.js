import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { WatchedCard } from "./WatchedCard";

export const WatchedMovies = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watched">
      <h1>My Watched Movies</h1>
      {watched && watched.length > 0 ? (
        <div className="watched__panel">
          {watched.map((movie) => (
            <WatchedCard movie={movie} key={movie.id} type="watched" />
          ))}
        </div>
      ) : (
        <h2>You will need to add movies for them to appear here.</h2>
      )}
    </div>
  );
};

export default WatchedMovies;
