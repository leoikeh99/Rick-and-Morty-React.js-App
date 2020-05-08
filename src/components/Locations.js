import React from "react";
import LocationItem from "./LocationItem";
import Spinner from "../components/layout/Spinner";
import PropTypes from "prop-types";

const Locations = ({ results, loading, error }) => {
  if (!loading && !error) {
    return results.map((result) => (
      <LocationItem result={result} key={result.id} />
    ));
  } else if (loading && !error) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div>
        <div className="pt-3"></div>
        <h5 className=" text-warning border-sm">
          <i className="fa fa-exclamation-triangle"></i>
          {" No results"}
        </h5>
      </div>
    );
  }
};
Locations.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Locations;
