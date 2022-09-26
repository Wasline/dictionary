import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Form.css";

export default function Form(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    //documentation: https://www.pexels.com/api/documentation/#photos-search/
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=6`;
    let apiKey = "563492ad6f91700001000001695ece32341743ff9722852c4efb08a4";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handlePictures);
  }

  function handlePictures(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}