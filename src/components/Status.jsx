import React from "react";
import PropTypes from "prop-types";

function Status(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
    </div>
  );
}

Status.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string
}

export default Status;
