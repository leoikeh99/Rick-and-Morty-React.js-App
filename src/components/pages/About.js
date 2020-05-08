import React, { Fragment } from "react";

export const About = () => (
  <Fragment>
    <div className="container">
      <div className="mt-3"></div>
      <h4 className="text-secondary">About this app</h4>
      <div>Name: Rick n Morty Navigator.</div>
      <div>Version: 1.0 </div>
      <div className="mb-2">
        Description: An aplication created with react.js using the
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          {" "}
          Rick and Morty API
        </a>
      </div>
      <a className="btn btn-outline-secondary">
        <i className="fab fa-github"></i> VIEW CODE IN GITHUB
      </a>
    </div>
  </Fragment>
);

export default About;
