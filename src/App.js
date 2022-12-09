import Weather from "./Weather";

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
          >
            Anna Bray
          </a>{" "}
          and is
          <a
            href="https://github.com/Annalouise643/react-weather-project"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
