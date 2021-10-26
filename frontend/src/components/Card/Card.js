import React from "react";
import "./Card.css";

export const Card = ({ movie }) => {
  return (
    <div className="card">
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
      <div className="poster__info">
        <h2 className="poster__title">{movie.title}</h2>
        <h3 className="release__date">
          {movie.release_date ? movie.release_date.substring(0, 4) : "----"}
        </h3>
      </div>
      <div className="add__buttons">
        <button className="add__to__watchlist">Add to WatchList</button>
        <button className="add__to__completed">Add to Completed</button>
        <button className="add__to__Favourites">Add to Favourites</button>
      </div>
    </div>
  );
};
