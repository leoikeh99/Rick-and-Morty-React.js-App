import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterItem = ({ result }) => {
  return (
    <div className="my-img-card">
      <img src={result.image} alt="" />
      <div className="info">
        <h6>
          {result.name}{" "}
          <small>
            {result.origin.name === "unknown" ? "" : "- " + result.origin.name}
          </small>
        </h6>
        <div className="badge badge-primary">
          <i className={"fa fa-" + result.gender.toLowerCase()}></i>
          {" " + result.gender}
        </div>
        <div className="badge badge-primary ml-1">
          <i
            className={
              result.status === "Alive" ? "fa fa-heart" : "fa fa-skull"
            }
          ></i>
          {" " + result.status}
        </div>
        <div className="badge badge-primary ml-1">
          <i
            className={
              result.species === "Human" ? "fa fa-user" : "fa fa-user-alt-slash"
            }
          ></i>
          {" " + result.species}
        </div>{" "}
        <br />
        <Link
          to={`/character/SingleCharcater/${result.id}`}
          className="btn btn-outline-primary btn-sm mt-2"
        >
          More
        </Link>
      </div>
    </div>
  );
};

CharacterItem.propTypes = {
  result: PropTypes.object.isRequired,
};

export default CharacterItem;
