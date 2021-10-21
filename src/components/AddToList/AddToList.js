import React, { useState } from "react";

import "./AddToList.css";

export const AddToList = () => {
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
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
