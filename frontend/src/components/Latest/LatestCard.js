import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GlobalContext } from "../../context/GlobalState";
import "./LatestCard.css";

export const LatestCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, addMovieToCompleted } =
    useContext(GlobalContext);

  let addedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = addedMovie ? true : false;

  const [select, setSelect] = useState(null);
  const open = select;

  const handleClick = (event) => {
    setSelect(event.currentTarget);
  };
  const handleClose = () => {
    setSelect(null);
  };

  return (
    <div className="latest__card">
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
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Select a List
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={select}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              addMovieToWatchlist(movie);
            }}
            className="add__to__watchlist"
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              addMovieToCompleted(movie);
            }}
          >
            Add to Completed
          </MenuItem>
          <MenuItem>Add to Favourites</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
