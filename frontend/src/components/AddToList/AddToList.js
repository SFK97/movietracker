import React, { useState } from "react";

import "./AddToList.css";

export const AddToList = () => {
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b3a5d5f8e5a9edd797cfbcdd25a9a6a0
      &langauge=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="add__page">
      <div className="container">
        <div className="add__movies">
          <div className="input__wrapper">
            <input
              type="text"
              placeholder="Search for Movies"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
