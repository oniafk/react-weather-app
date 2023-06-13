import "./Weather.css";

function Weather(props) {
  const imgURL = `https:${props.current.condition.icon}`;

  return (
    <div className="weather">
      <span className="weather__icon" role="img" aria-label="Cloudy">
        <img src={imgURL} alt="weather icon" />
      </span>
      <div className="weather__temperature--container">
        <p className="weather__temperature">{props.current.temp_c}</p>
        <span className="weather__temperature--unit">°C</span>
      </div>
    </div>
  );
}

export { Weather };
