import React from "react";
import PropTypes from "prop-types";
import "./walletBalance.scss";

const nameMapping = {
  EUR: "Euros",
  GBP: "Pounds",
  USD: "Dollars"
};

const signMapping = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};

export const WalletBalance = ({ currency, balance }) => (
  <div className="walletBalance">
    <div className="walletBalance__name">{nameMapping[currency]}</div>
    <div className="walletBalance__moneyContainer">
      <div className="walletBalance__value">{balance}</div>
      <div className="walletBalance__code">{signMapping[currency]}</div>
    </div>
  </div>
);

WalletBalance.propTypes = {
  currency: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};
