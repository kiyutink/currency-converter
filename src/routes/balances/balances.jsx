import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { WalletBalance } from "../../components/walletBalance";

const mapStateToProps = state => ({
  wallets: state.balances
});

let Balances = ({ wallets }) => (
  <div>
    <h1>your balances are the following</h1>

    <div>
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
