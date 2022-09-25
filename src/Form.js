import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Form.css";

export default function Form(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handelResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documenttion: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Form">
        <section>
          <form onSubmit={handelSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              autoFocus="on"
              defaultValue={props.defaultKeyword}
            />
            <button type="submit" className="btn btn-outline-dark btn-sm">
              Submit
            </button>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}