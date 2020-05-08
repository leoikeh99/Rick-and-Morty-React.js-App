import React, { useEffect, useContext } from "react";
import Spinner from "./layout/Spinner";
import CharacterItem from "./CharacterItem";
import RMContext from "../context/RM/rmContext";

const SingleLocation = ({ match }) => {
  const rmContext = useContext(RMContext);
  const {
    loading,
    LocationResidents,
    error,
    location,
    getLocation,
  } = rmContext;
  useEffect(() => {
    getLocation(match.params.id);
    //eslint-disable-next-line
  }, []);

  if (loading && !error) {
    return <Spinner />;
  } else if (!loading && !error) {
    return (
      <div className="container">
        <div className="border-sm mt-3">
          <ul className="list-group">
            <li className="list-group-item active text-center">
              <h5>{location.name}</h5>
            </li>
            <li className="list-group-item">{`Type: ${location.type}`}</li>
            <li className="list-group-item">{`Dimension: ${location.dimension}`}</li>
          </ul>
          <h5 className="mt-4">Residents</h5>
          <div className="grid-view">
            {LocationResidents.map((result) => (
              <CharacterItem result={result} key={result.id} />
            ))}
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="container">
        <div className="pt-3"></div>
        <h5 className=" text-warning border-sm">
          <i className="fa fa-exclamation-triangle"></i>
          {" " + location.error}
        </h5>
      </div>
    );
  }
};

export default SingleLocation;
