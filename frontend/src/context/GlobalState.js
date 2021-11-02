import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  // completed: localStorage.getItem("completed")
  //   ? JSON.parse(localStorage.getItem("completed"))
  //   : [],
  // favourite: localStorage.getItem("favourite")
  //   ? JSON.parse(localStorage.getItem("favourite"))
  //   : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    // localStorage.setItem("completed", JSON.stringify(state.completed));
    // localStorage.setItem("favourite", JSON.stringify(state.favourite));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  // const moveMovieToWatchlist = (movie) => {
  //   dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
  // };

  // const addMovieToCompleted = (movie) => {
  //   dispatch({ type: "ADD_MOVIE_TO_COMPLETED", payload: movie });
  // };

  // const removeMovieFromCompleted = (id) => {
  //   dispatch({ type: "REMOVE_MOVIE_FROM_COMPLETED", payload: id });
  // };

  // const moveMovieToCompleted = (movie) => {
  //   dispatch({ type: "MOVE_MOVIE_TO_COMPLETED", payload: movie});
  // };

  // const addMovieToFavourite = (movie) => {
  //   dispatch({ type: "ADD_MOVIE_TO_FAVOURITE", payload: movie });
  // };

  // const removeMovieFromFavourite = (id) => {
  //   dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITE", payload: id });
  // };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        completed: state.completed,
        favourite: state.favourite,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        // moveMovieToWatchlist,
        // addMovieToCompleted,
        // removeMovieFromCompleted,
        // moveMovieToCompleted,
        // addMovieToFavourite,
        // removeMovieToFavourite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
