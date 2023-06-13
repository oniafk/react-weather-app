import "./Location.css";

function Location(props) {
  return (
    <div className="location">
      <p className="result">Results for:</p>
      <p className="location__city">{props.location.name},</p>
      <p className="location__country">{props.location.country}</p>
    </div>
  );
}

export { Location };
