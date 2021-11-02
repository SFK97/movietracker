import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export const WatchListActions = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToCompleted,
    moveToWatchlist,
    removeFromCompleted,
  } = useContext(GlobalContext);
  return (
    <div>
      <AddCircleOutlineIcon />

      <DeleteIcon onClick={() => removeMovieFromWatchlist(movie.id)} />
    </div>
  );
};
