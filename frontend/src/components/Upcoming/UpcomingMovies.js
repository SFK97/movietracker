import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import "./UpcomingMovies.css";

export const UpcomingMovies = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b3a5d5f8e5a9edd797cfbcdd25a9a6a0&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, []);

  return (
    <div className="upcoming">
      <div className="container">
        {results && results.length > 0 && (
          <ul className="results">
            {results.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
