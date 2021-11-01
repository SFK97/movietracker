import React from "react";

export const WatchCard = ({ movie, type }) => {
  return (
    <div className="watchcard">
      <div className="poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="poster__missing"></div>
        )}
      </div>
    </div>
  );
};
