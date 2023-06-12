import "./Home.css";
import { Location } from "../Location/Location";
import { Weather } from "../Weather/weather";
import { WeatherDetails } from "../WeatherDetails/weatherDetails";
import { Forecast } from "../Forecast/Forecast";
import { Loading } from "../Loading/Loading";
import { SearchBar } from "../SearchBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [code, setCode] = useState("London");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "1a96c1fc1e464d04b6763726230106";

  useEffect(() => {
    let API;

    if (code) {
      API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${code}&aqi=no`;
    } else {
      API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`;
    }

    console.log(code + "code");

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
    }, 2000);
  }, [code]);

  const handleSearch = (searchCode) => {
    setCode(searchCode);
  };

  console.log(posts);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Home">
      <SearchBar onSearch={handleSearch} />
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
