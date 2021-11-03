import React, { useState, useEffect } from "react";
import { LatestCard } from "./LatestCard";
import "./LatestMovies.css";

export const LatestMovies = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b3a5d5f8e5a9edd797cfbcdd25a9a6a0&language=en-US&page=1
    `)
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
    <div className="latest">
      <div className="title">Popular Movies Right Now</div>
      <div className="container">
        {results && results.length > 0 && (
          <ul className="results">
            {results.slice(0, 3).map((movie) => (
              <li key={movie.id}>
                <LatestCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
