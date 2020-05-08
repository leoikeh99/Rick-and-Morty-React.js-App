import React, { useState, useContext } from "react";
import Locations from "./Locations";
import RMContext from "../context/RM/rmContext";

const Location = () => {
  const rmContext = useContext(RMContext);
  const { loading, error, locations, searchLocations } = rmContext;
  const [text, setText] = useState("");

  const keyUp = (e) => {
    setText(e.target.value.trim());
    searchLocations(e.target.value.trim());
  };

  return (
    <div className="container">
      <form action="">
        <input
          id="searchL"
          type="text"
          style={{ padding: "18px" }}
          className="form-control padd font-weight-bolder"
          placeholder="Enter name of location..."
          onKeyUp={keyUp}
        />
      </form>

      {!(text === "") && (
        <div className="grid-view">
          <Locations
            results={locations.results}
            loading={loading}
            error={error}
          />
        </div>
      )}
    </div>
  );
};

export default Location;
