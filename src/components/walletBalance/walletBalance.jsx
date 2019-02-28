import React from "react";
import PropTypes from "prop-types";
import "./walletBalance.scss";
import { nameMapping, signMapping } from "../../shared/currencyMappings";

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
