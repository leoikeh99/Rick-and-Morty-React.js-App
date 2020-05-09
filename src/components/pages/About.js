import React, { Fragment } from "react";

export const About = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="mt-3"></div>
        <div className="about">
          <h4 className="text-secondary">About this app</h4>
          <ul>
            <li>
              {" "}
              <strong className="text-secondary">Name</strong>: Rick n Morty
              Navigator.
            </li>
            <li>
              <strong className="text-secondary">Version</strong>: 1.0{" "}
            </li>
            <li>
              <strong className="text-secondary">VersionDescription</strong>: An
              aplication created with react.js using the
              <a
                href="https://rickandmortyapi.com/"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                {" "}
                Rick and Morty API
              </a>{" "}
              , use this application to search on hundreds of characters getting
              fully all information.
            </li>
          </ul>
          <div className="mb-2"></div>
          <a
            href="https://github.com/leoikeh99/Rick-and-Morty-React.js-App"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            <i className="fab fa-github"></i> VIEW CODE IN GITHUB
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
