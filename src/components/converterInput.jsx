import React from "react";
import PropTypes from "prop-types";

export const ConverterInput = props => {
  return <input type="text" value={props.value} onChange={props.onChange} />;
};

ConverterInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
