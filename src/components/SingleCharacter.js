import React, { useEffect, useContext } from "react";
import Spinner from "./layout/Spinner";
import EpisodeItem from "./EpisodeItem";
import RMContext from "../context/RM/rmContext";

const SingleCharacter = ({ match }) => {
  const rmContext = useContext(RMContext);
  const {
    loading,
    character,
    CharacterEpisodes,
    error,
    getCharacter,
  } = rmContext;
  useEffect(() => {
    getCharacter(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading && !error) {
    return <Spinner />;
  } else if (!loading && !error) {
    return (
      <div className="container">
        <div className="border-sm mt-3">
          <div className="text-center">
            <img src={character.image} alt="" className="img-round" />
            <h4>{character.name}</h4>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Gender: {character.gender}</li>
            <li className="list-group-item">Species: {character.species}</li>
            <li className="list-group-item">Status: {character.status}</li>
            <li className="list-group-item">
              Origin: {character.origin && character.origin.name}
            </li>
            <li className="list-group-item">
              Last seen: {character.location && character.location.name}
            </li>
          </ul>
          <br />
          <h5>Charcater Episodes</h5>
          <div className="grid-view">
            {CharacterEpisodes.map((result) => (
              <EpisodeItem result={result} key={result.id} />
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
          {" " + character.error}
        </h5>
      </div>
    );
  }
};

export default SingleCharacter;
