import React, { useState, useContext } from "react";
import Characters from "./Characters";
import RMContext from "../context/RM/rmContext";

const Character = () => {
  const rmContext = useContext(RMContext);
  const { loading, error, characters, searchCharacters } = rmContext;
  const [text, setText] = useState("");
  const keyUp = (e) => {
    setText(e.target.value.trim());
    searchCharacters(e.target.value.trim());
  };

  return (
    <div className="container">
      <form action="">
        <input
          id="search"
          type="text"
          style={{ padding: "18px" }}
          className="form-control font-weight-bolder"
          placeholder="Enter character name..."
          onKeyUp={keyUp}
        />
      </form>

      {!(text === "") && (
        <div className="grid-view mb-2">
          <Characters
            results={characters.results}
            loading={loading}
            error={error}
          />
        </div>
      )}
    </div>
  );
};

export default Character;
