import React, { useState } from "react";
import Forecast from "./Forecast";
import DailyForecast from "./DailyForecast";

import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [forecastData, setForecastData] = useState({ load: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setForecastData({
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      load: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a4748acc18b1b91de37c3e8310fc0ce3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastData.load) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search a location"
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <Forecast data={forecastData} />
        <DailyForecast coordinates={forecastData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Gathering current forecast....";
  }
}
