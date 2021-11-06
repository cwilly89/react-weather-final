import React from "react";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Fri</div>
          <div className="DailyForecast-img">
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="icon"
            />
          </div>
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temps-max">80</span> |{" "}
            <span className="DailyForecast-temps-min">42</span>
          </div>
        </div>
      </div>
    </div>
  );
}
