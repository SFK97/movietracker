import React, { useState } from "react";
import { Card } from "../Card/Card";

import "./AddToList.css";

export const AddToList = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b3a5d5f8e5a9edd797cfbcdd25a9a6a0&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add__to__list">
      <div className="add__movies">
        <div className="input">
          <input
            type="text"
            placeholder="Search for Movies"
            value={query}
            onChange={onChange}
          />
        </div>
        {results.length > 0 && (
          <ul className="results">
            {results.map((movie) => (
              <li key={movie.id}>
                <Card movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
