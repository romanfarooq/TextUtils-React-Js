import React from "react"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function AboutUs(props) {
  return (
    <main role="main" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">{props.heading}</h1>
          <p>
            This a Web App to manipulate Text.
            <br /><br />Made By Roman Farooq
            <br />Student Of University of Centeral Punjab
          </p>
          <p><Link className="btn btn-primary btn-lg" to="/" role="button">Learn more &raquo;</Link></p>
        </div>
      </div>
    </main>
  );
}

AboutUs.propTypes = {
  heading: PropTypes.string.isRequired
}

export default AboutUs;