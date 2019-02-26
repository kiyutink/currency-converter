import React from "react";
import PropTypes from "prop-types";

export const WalletBalance = props => (
  <div
    style={{
      border: "1px solid black",
      margin: 10
    }}
  >
    {props.currency}
    <hr />
    {props.balance}
  </div>
);

WalletBalance.propTypes = {
  currency: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};
