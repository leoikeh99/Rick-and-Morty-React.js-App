import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LocationItem = ({ result }) => {
  const { dimension, type, name, id } = result;
  return (
    <div className="grid-view">
      <div className="border-sm">
        <h5>{name}</h5>
        <div className="badge badge-pill badge-danger">{`Type: ${type}`}</div>
        <br />
        <div className="badge badge-pill badge-primary">
          {dimension !== "unknown" ? dimension : "Dimension: unknown"}
        </div>
        <br />
        <Link
          to={`/location/SingleLocation/${id}`}
          className="btn btn-outline-primary btn-sm mt-1 form-control"
        >
          More
        </Link>
      </div>
    </div>
  );
};

LocationItem.propTypes = {
  result: PropTypes.object.isRequired,
};

export default LocationItem;
