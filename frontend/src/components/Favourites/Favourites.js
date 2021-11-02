import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FavouriteCard } from "./FavouriteCard";

export const FavouriteMovies = () => {
  const { favourited } = useContext(GlobalContext);

  return (
    <div className="favourite">
      <h1>My Favourite Movies</h1>
      {favourited && favourited.length > 0 ? (
        <div className="favourite__panel">
          {favourited.map((movie) => (
            <FavouriteCard movie={movie} key={movie.id} type="favourited" />
          ))}
        </div>
      ) : (
        <h2>You will need to add movies for them to appear here.</h2>
      )}
    </div>
  );
};

export default FavouriteMovies;
