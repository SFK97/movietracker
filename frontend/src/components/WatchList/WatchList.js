import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { WatchlistCard } from "./WatchlistCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist">
      <h1>My WatchList</h1>
      {watchlist && watchlist.length > 0 ? (
        <div className="watchlist__panel">
          {watchlist.map((movie) => (
            <WatchlistCard movie={movie} key={movie.id} type="watchlist" />
          ))}
        </div>
      ) : (
        <h2>You will need to add movies for them to appear here.</h2>
      )}
    </div>
  );
};
