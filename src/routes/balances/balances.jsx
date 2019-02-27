import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { WalletBalance } from "../../components/walletBalance";
import "./balances.scss";

const mapStateToProps = state => ({
  wallets: state.balances
});

let Balances = ({ wallets }) => (
  <div className="balances">
    <h1 className="balances__header">Balances</h1>
    <div className="balances__wallets">
      {Object.keys(wallets).map(key => {
        const wallet = wallets[key];
        return <WalletBalance key={key} currency={key} balance={wallet} />;
      })}
    </div>
  </div>
);

Balances.propTypes = {
  wallets: PropTypes.object
};

Balances = connect(mapStateToProps)(Balances);

export { Balances };
