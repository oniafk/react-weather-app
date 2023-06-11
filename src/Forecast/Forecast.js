import "./Forecast.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ForecastItem } from "./Forecast-item/ForecastItem";

function Forecast() {
  const [posts, setPosts] = useState([]);
  const [forecast, setForecast] = useState([]);
  const API_KEY = "1a96c1fc1e464d04b6763726230106";

  const API = ` https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    axios
      .get(`${API}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [API]);

  useEffect(() => {
    if (posts.forecast) {
      setForecast(posts.forecast.forecastday);
    }
  }, [posts]);

  return (
    <div className="forecast--container">
      {forecast.map((item) => (
        <ForecastItem
          key={item.date}
          maxTemp={item.day.maxtemp_c}
          minTemp={item.day.mintemp_c}
          icon={item.day.condition.icon}
          date={item.date}
        />
      ))}
    </div>
  );
}

export { Forecast };


// object Destructuring

const {day,date } = item;