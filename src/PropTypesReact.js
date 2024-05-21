import React from "react";
import { PropTypes } from "prop-types";

const PropTypesReact = (props) => {
  const { name, age, add, mob } = props;

  return (
    <div>
      <h1 className="text-center mb-5">
        Hello Here Am Presenting my Details using Props and PropTypes
      </h1>

      <h3 className="text-center">Name - {name}</h3>
      <h3 className="text-center">age - {age}</h3>
      <h3 className="text-center">Address - {add}</h3>
      <h3 className="text-center">Mobile Number - {mob}</h3>
    </div>
  );
};

PropTypesReact.defaultProps = {
  name : "User",
  age : 18,
  add : "India",
  mob : "0000000000"

}

PropTypesReact.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  add: PropTypes.any,
  mob: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export default PropTypesReact;
