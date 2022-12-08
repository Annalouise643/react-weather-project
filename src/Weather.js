import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Rome</h1>
      <ul>
        <li>Thursday 07:59</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 97%</li>
            <li>Wind: 2 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}