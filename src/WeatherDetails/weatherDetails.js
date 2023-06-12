import "./WeatherDetails.css";

function WeatherDetails(props) {
  let today = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[today.getDay()];
  // let hours = today.getHours();
  let minutes = today.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let time = `${day} - ${props.location.localtime} `;
  return (
    <div className="weatherDetails">
      <div className="weatherDescription">
        <p>Humidity: {props.current.humidity}% </p>
        <p>Feels like: {props.current.feelslike_c}</p>
        <p>Wind: {props.current.wind_mph} mph</p>
      </div>
      <div className="weatherDescription--day">
        <h2>Weather</h2>
        <p>{`${time}`}</p>
        <p>description: {props.current.condition.text}</p>
      </div>
    </div>
  );
}

export { WeatherDetails };
