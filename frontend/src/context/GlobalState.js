import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
  favourited: localStorage.getItem("favourited")
    ? JSON.parse(localStorage.getItem("favourited"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("favourited", JSON.stringify(state.favourited));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const moveMovieToWatchlist = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  const moveMovieToWatched = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_WATCHED", payload: movie });
  };

  const addMovieToFavourited = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITED", payload: movie });
  };

  const removeMovieFromFavourited = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        favourited: state.favourited,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        moveMovieToWatchlist,
        addMovieToWatched,
        removeMovieFromWatched,
        moveMovieToWatched,
        addMovieToFavourited,
        removeMovieFromFavourited,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
