import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <div className="DailyForecast-img"></div>
      <div className="DailyForecast-temps">
        <span className="DailyForecast-temps-max">{maxTemperature()} °F</span> |{" "}
        <span className="DailyForecast-temps-min">{minTemperature()} °F</span>
      </div>
    </div>
  );
}
