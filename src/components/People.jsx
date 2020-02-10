import React from "react";
import PropTypes from "prop-types";

function People(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.image}</p>
      <p>{props.button}</p>
    </div>
  );
}

People.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  button: PropTypes.string
};
export default People;
