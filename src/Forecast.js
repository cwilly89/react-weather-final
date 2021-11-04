import React from "react";
import FormattedDate from "./FormattedDate";
import ForecastTemp from "./ForecastTemp";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <h1> {props.data.city} </h1>
      <ForecastTemp fahrenheit={props.data.temperature} />

      <img src={props.data.icon} alt={props.data.description} />
      <div className="row">
        <div className="col-6">
          <ul>
            <li span className="humidity">
              Humidity: {Math.round(props.data.humidity)}%
            </li>
            <li span className="wind">
              Wind: {Math.round(props.data.wind)} mph
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              {" "}
              <FormattedDate date={props.data.date} />{" "}
            </li>

            <li span className="description text-capitalize">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
