import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Form.css";

export default function Form() {
  let [keyword, setKeyword] = useState(null);
let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handelResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

//documenttion: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);
  }
  return (
    <div className="Form">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus="on" />
      </form>
      <Results results={results} />
    </div>
  );
}
