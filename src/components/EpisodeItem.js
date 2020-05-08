import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EpisodeItem = ({ result }) => {
  const { air_date, episode, name, id } = result;
  return (
    <div className="grid-view" id={id}>
      <div className="border-sm">
        <h5>{name}</h5>
        <div className="badge badge-pill badge-danger">{episode}</div>
        <br />
        <div className="badge badge-pill badge-primary">
          {"Air date: " + air_date}
        </div>
        <br />
        <Link
          to={`/episode/SingleEpisode/${result.id}`}
          className="btn btn-outline-primary btn-sm mt-2"
        >
          More
        </Link>
      </div>
    </div>
  );
};

EpisodeItem.propTypes = {
  result: PropTypes.object.isRequired,
};
export default EpisodeItem;
