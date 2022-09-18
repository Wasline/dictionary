import logo from "./choose.jpg";
import Form from "./Form";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>DICTIONARY</h1>
          <p>You just have to ask, I'll execute.</p>
        </header>
        <main>
          <Form />
        </main>
        <footer className="text-center">
          Coded by Wasline Saint fleur and it's{" "}
          <a
            href="https://github.com/Wasline/dictionary"
            className="text-decoration-none"
            target="_blank"
            
            title="link to github"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
