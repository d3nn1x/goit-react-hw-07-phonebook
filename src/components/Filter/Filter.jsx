import React from "react";

export default function Filter({ filter, filterChange }) {
  return (
    <div>
      <label htmlFor="filter" className="label">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        onChange={(e) => filterChange(e.target.value)}
        value={filter}
        className="input"
      />
    </div>
  );
}
