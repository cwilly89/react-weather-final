import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Seattle" />

      <footer>
        This project was coded by Channell Mascaro and is
        <a
          href="https://github.com/cwilly89/react-weather-final"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub {""}
        </a>
        and{" "}
        <a
          href="https://reverent-swanson-1aaafe.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
