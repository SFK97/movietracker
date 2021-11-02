export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_COMPLETED":
      return {
        ...state,
        completed: [action.payload, ...state.completed],
      };
    case "REMOVE_MOVIE_FROM_COMPLETED":
      return {
        ...state,
        completed: state.completed.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "MOVE_MOVIE_TO_COMPLETED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        completed: [action.payload, ...state.completed],
      };
    case "MOVE_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        completed: state.completed.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_MOVIE_TO_FAVOURITE":
      return {
        ...state,
        favourite: [action.payload, ...state.completed],
      };
    case "REMOVE_MOVIE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: state.completed.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "MOVE_FAVOURITE_TO_WATCHLIST":
      return {
        ...state,
        favourite: state.favourite.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};
