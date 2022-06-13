import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://www.linkedin.com/in/kateryna-komisarova/">
              Kateryna Komisarova
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
