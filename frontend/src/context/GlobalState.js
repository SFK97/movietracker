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

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        // completed: state.completed,
        // favourite: state.favourite,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
