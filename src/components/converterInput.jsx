import React from "react";
import PropTypes from "prop-types";

const sanitizeMoney = text => {
  // remove all characters that aren't digit or dot
  let value = text.replace(/[^0-9.]/g, "");
  // replace multiple dots with a single dot
  value = value.replace(/\.+/g, ".");
  // only allow 2 digits after a dot
  value = value.replace(/(.*\.[0-9][0-9]?).*/g, "$1");
  // replace multiple zeros with a single one
  value = value.replace(/^0+(.*)$/, "0$1");
  // remove leading zero
  value = value.replace(/^0([^.].*)$/, "$1");
  // replace "." with "0."
  value = value.replace(/^\.(.*)$/, "0.$1");
  return value;
};

export const ConverterInput = props => (
  <input
    type="text"
    value={props.value}
    onChange={e => {
      props.onChange(sanitizeMoney(e.target.value));
    }}
  />
);

ConverterInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ConverterInput.propTypes = {
  onChange: PropTypes.func
};
