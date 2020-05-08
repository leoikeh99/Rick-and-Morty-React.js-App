import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  const [characters, setCharacters] = useState(false);
  const [episodes, setEpisodes] = useState(false);
  const [locations, setLocations] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setCharacters(true);
      setEpisodes(false);
      setLocations(false);
    }
    if (window.location.pathname === "/episodes") {
      setCharacters(false);
      setEpisodes(true);
      setLocations(false);
    }
    if (window.location.pathname === "/locations") {
      setCharacters(false);
      setEpisodes(false);
      setLocations(true);
    }
  }, []);

  const gotoCharacters = (e) => {
    setCharacters(true);
    setEpisodes(false);
    setLocations(false);
  };
  const gotoEpisodes = (e) => {
    setCharacters(false);
    setEpisodes(true);
    setLocations(false);
  };
  const gotoLocations = (e) => {
    setCharacters(false);
    setEpisodes(false);
    setLocations(true);
  };
  return (
    <div className="container">
      <div className="main-nav pt-4">
        <ul>
          <li className={characters ? "bb active" : ""}>
            <Link to="/" className=" text-secondary" onClick={gotoCharacters}>
              <i className="fas fa-users"></i>
              <span className="text"> CHARACTERS</span>
            </Link>
          </li>
          <li className={episodes ? "bb active" : ""}>
            <Link
              to="/episodes"
              className=" text-secondary"
              onClick={gotoEpisodes}
            >
              <i className="fa fa-tv"></i>{" "}
              <span className="text"> EPISODES</span>
            </Link>
          </li>
          <li className={locations ? "bb active" : ""}>
            <Link
              to="/locations"
              className=" text-secondary"
              onClick={gotoLocations}
            >
              <i className="fa fa-location-arrow"></i>
              <span className="text"> LOCATIONS</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
