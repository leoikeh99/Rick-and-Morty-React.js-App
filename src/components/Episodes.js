import React from "react";
import PropTypes from "prop-types";
import EpisodeItem from "./EpisodeItem";
import Spinner from "../components/layout/Spinner";

const Episodes = ({ results, loading, error }) => {
  //   console.log(results[0]);
  if (!loading && !error) {
    return results.map((result) => (
      <EpisodeItem result={result} key={result.id} />
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

Episodes.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Episodes;
