import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://infallible-goldberg-4e9ba6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Anna Bray
          </a>{" "}
          and is
          <a
            href="https://github.com/Annalouise643/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
