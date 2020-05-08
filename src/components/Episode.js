import React, { useState, useContext } from "react";
import Episodes from "./Episodes";
import RMContext from "../context/RM/rmContext";

const Episode = () => {
  const rmContext = useContext(RMContext);
  const { loading, error, episodes, searchEpisodes } = rmContext;
  const [text, setText] = useState("");

  const keyUp = (e) => {
    setText(e.target.value.trim());
    searchEpisodes(e.target.value.trim());
  };
  return (
    <div className="container">
      <form action="">
        <input
          id="searchE"
          type="text"
          style={{ padding: "18px" }}
          className="form-control padd font-weight-bolder"
          placeholder="e.g S01E09 or 9..."
          onKeyUp={keyUp}
        />
      </form>

      {!(text === "") && (
        <div className="grid-view">
          <Episodes
            results={episodes.results}
            loading={loading}
            error={error}
          />
        </div>
      )}
    </div>
  );
};

export default Episode;
