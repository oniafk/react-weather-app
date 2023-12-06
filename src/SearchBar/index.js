import React from "react";
import "./styles.css";

function SearchBar({ onSearch }) {
  const [code, setCode] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(code);
  };

  const onChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="searchbar--container">
      <input
        type="text"
        placeholder="Search for a location using a zip/postal code"
        value={code}
        onChange={onChange}
      ></input>
      <span>
        <button type="submit">Search</button>
      </span>
    </form>
  );
}

export { SearchBar };
