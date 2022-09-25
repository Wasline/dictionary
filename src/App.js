import React, {useState} from "react";
import Form from "./Form";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>DICTIONARY</h1>
          <h6><em>You just have to ask, I'll execute.</em></h6>
        </header>
        <main>
          <Form defaultKeyword="basketball" />
          </main>
        <footer className="text-center">
          Coded by Wasline Saint fleur and it's{" "}
          <a
            href="https://github.com/Wasline/dictionary"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
            title="link to github"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}