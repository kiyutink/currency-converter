import React, { useState } from "react";
import PropTypes from "prop-types";
import { signMapping } from "../../shared/currencyMappings";
import "./currencySelector.scss";

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
    <div className="currencySelector">
      <button
        className="currencySelector__button currencySelector__button--prev"
        onClick={prev}
      />
      <div className="currencySelector__sign">
        {signMapping[availableCurrencies[currentIndex]]}
      </div>
      <button
        className="currencySelector__button currencySelector__button--next"
        onClick={next}
      />
    </div>
  );
};

CurrencySelector.propTypes = {
  availableCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  initialValue: PropTypes.string.isRequired
};
