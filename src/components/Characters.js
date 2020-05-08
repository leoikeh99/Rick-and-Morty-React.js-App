import React from "react";
import PropTypes from "prop-types";
import CharacterItem from "./CharacterItem";
import Spinner from "../components/layout/Spinner";

const Characters = ({ results, loading, error }) => {
  //   console.log(results[0]);
  if (!loading && !error) {
    return results.map((result) => (
      <CharacterItem result={result} key={result.id} />
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

Characters.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Characters;
