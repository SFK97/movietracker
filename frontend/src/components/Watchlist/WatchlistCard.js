import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { WatchListActions } from "./WatchlistActions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

export const WatchlistCard = ({ movie, type }) => {
  const { removeMovieFromWatchlist, moveMovieToWatched, addMovieToFavourited } =
    useContext(GlobalContext);

  const [select, setSelect] = useState(null);
  const open = select;

  const handleClick = (event) => {
    setSelect(event.currentTarget);
  };
  const handleClose = () => {
    setSelect(null);
  };

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
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Edit
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
              removeMovieFromWatchlist(movie.id);
            }}
            className="remove_from_watchlist"
          >
            Remove from Watchlist
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              moveMovieToWatched(movie);
            }}
          >
            Move to Watched
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              addMovieToFavourited(movie);
            }}
          >
            Add to Favourites
          </MenuItem>
        </Menu>
      </div>
      <WatchListActions type={type} movie={movie} />
    </div>
  );
};
