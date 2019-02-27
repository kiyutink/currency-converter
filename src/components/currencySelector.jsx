import React, { useState } from "react";
import PropTypes from "prop-types";

export const CurrencySelector = ({
  onChange,
  availableCurrencies,
  initialValue
}) => {
  const [currentIndex, changeCurrentIndex] = useState(
    availableCurrencies.findIndex(el => el === initialValue)
  );

  const next = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > availableCurrencies.length - 1) {
      newIndex = 0;
    }
    changeCurrentIndex(newIndex);
    if (onChange) {
      onChange(availableCurrencies[newIndex]);
    }
  };

  const prev = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = availableCurrencies.length - 1;
    }
    changeCurrentIndex(newIndex);
    if (onChange) {
      onChange(availableCurrencies[newIndex]);
    }
  };

  return (
    <div>
      <div onClick={prev}>up</div>
      {availableCurrencies[currentIndex]}
      <div onClick={next}>down</div>
    </div>
  );
};

CurrencySelector.propTypes = {
  availableCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  initialValue: PropTypes.string.isRequired
};
