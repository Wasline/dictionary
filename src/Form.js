import React,{useState} from "react";
import "./Form.css";

export default function Form() {
let [keyword, setKeyword] = useState(null);

function haandelKeywordChange(event){
    setKeyword(event.target.value);
}

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of the word "${keyword}"`);
  }
  return (
    <div className="Form">
      <form onSubmit={search}>
        <input type="search"
        onChange={haandelKeywordChange}
        autoFocus="on" />
      </form>
    </div>
  );
}
