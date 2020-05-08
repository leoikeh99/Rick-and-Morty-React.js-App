import React, { useEffect, useContext } from "react";
import Spinner from "./layout/Spinner";
import CharacterItem from "./CharacterItem";
import RMContext from "../context/RM/rmContext";

const SingleEpisode = ({ match }) => {
  const rmContext = useContext(RMContext);
  const { loading, error, EpisodeCharacters, episode, getEpisode } = rmContext;
  useEffect(() => {
    getEpisode(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading && !error) {
    return <Spinner />;
  } else if (!loading && !error) {
    return (
      <div className="container">
        <div className="border-sm mt-3">
          <ul className="list-group">
            <li className="list-group-item active text-center">
              <h5>{episode.name}</h5>
            </li>
            <li className="list-group-item">{`Episode: ${episode.episode}`}</li>
            <li className="list-group-item">{`Air date: ${episode.air_date}`}</li>
          </ul>
          <h5 className="mt-4">Episode Characters</h5>
          <div className="grid-view">
            {EpisodeCharacters.map((result) => (
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
          {" " + episode.error}
        </h5>
      </div>
    );
  }
};
export default SingleEpisode;
