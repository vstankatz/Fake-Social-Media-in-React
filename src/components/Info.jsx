import React from "react";
import PropTypes from "prop-types";

function Info(props) {
  return(
    <div>
    <h1>{props.name}</h1>
    <p>{props.aboutText}</p>
    <p>{props.photo}</p>
    </div>
  );
}

Info.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  photo: PropTypes.string
};

export default Info;
