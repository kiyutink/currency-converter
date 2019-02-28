import React from "react";
import PropTypes from "prop-types";
import "./converterInput.scss";

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

  if (/\./.test(value)) {
    const [int, decimal] = value.split(".");
    if (int.length > 10) {
      value = int.substr(0, 10) + decimal;
    }
  } else {
    value = value.substr(0, 10);
  }

  return value;
};

export const ConverterInput = ({ value, onChange, autoFocus }) => (
  <input
    autoFocus={autoFocus}
    type="text"
    value={value}
    className="converterInput"
    onChange={e => {
      onChange(sanitizeMoney(e.target.value));
    }}
  />
);

ConverterInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoFocus: PropTypes.bool
};
