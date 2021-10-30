import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [load, setLoad] = useState(false);
  let [forecastData, setForecastData] = useState({});

  function handleResponse(response) {
    setForecastData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      city: response.data.name,
    });
    console.log(response);

    setLoad(true);
  }

  if (load) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a location"
                className="form control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-success "
              />
            </div>
          </div>
        </form>
        <h1> Seattle {forecastData.city} </h1>
        <h2>{Math.round(forecastData.temperature)} °F </h2>
        <img src={forecastData.icon} alt={forecastData.description} />
        <div className="row">
          <div className="col-6">
            <ul>
              <li span className="humidity">
                Humidity: {Math.round(forecastData.humidity)}%
              </li>
              <li span className="wind">
                Wind: {Math.round(forecastData.wind)} mph
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Friday 12:00 PM</li>

              <li span className="description text-capitalize">
                {forecastData.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a4748acc18b1b91de37c3e8310fc0ce3";
    let city = "Seattle";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Gathering current forecast....";
  }
}
