import "./Home.css";
import { Location } from "../Location/Location";
import { Weather } from "../Weather/weather";
import { WeatherDetails } from "../WeatherDetails/weatherDetails";
import { Forecast } from "../Forecast/Forecast";
import { Loading } from "../Loading/Loading";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "1a96c1fc1e464d04b6763726230106";

  const API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${API}`)
        .then((response) => {
          setPosts(response.data);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 10000);
  }, [API]);

  console.log(posts);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Home">
      <Location {...posts} />
      <div className="weatherDetails--container">
        <Weather {...posts} />
        <WeatherDetails {...posts} />
      </div>
      <Forecast />
    </div>
  );
}

export default Home;
