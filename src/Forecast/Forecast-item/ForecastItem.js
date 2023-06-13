import "./ForecastItem.css";

function ForecastItem({ maxTemp, minTemp, icon, date }) {
  const iconElemnt = icon;

  const dateA = date;
  const dateObj = new Date(dateA);
  const dayOfWeek = dateObj.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekDays[dayOfWeek];

  return (
    <div className="forecast--item">
      <div className="forecast--item__day">{day}</div>
      <div className="forecast--item__icon" role="img" aria-label="Cloudy">
        <img src={`${iconElemnt}`} />
      </div>
      <div className="forecast--item__temp">
        {minTemp}°C / {maxTemp}°C
      </div>
    </div>
  );
}

export { ForecastItem };
