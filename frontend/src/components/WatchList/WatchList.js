import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { WatchCard } from "./WatchCard";

export const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist">
      <h1>My WatchList</h1>
      {watchlist > 0 ? (
        <div className="watchlist__panel">
          {watchlist.map((movie) => (
            <WatchCard movie={movie} key={movie.id} type="watchlist" />
          ))}
        </div>
      ) : (
        <h2>You will need to add movies for them to appear here.</h2>
      )}
    </div>
  );
};
