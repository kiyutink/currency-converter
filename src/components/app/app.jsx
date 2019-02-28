import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router";
import { Balances } from "../../routes/balances/balances";
import { Convert } from "../../routes/convert/convert";
import { Header } from "../header/header";
import { updateRates } from "../../actionCreators/rates";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./app.scss";

const mapDispatchToProps = {
  updateRates
};

let App = props => {
  useEffect(() => {
    props.updateRates();
    setInterval(props.updateRates, 10000);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Balances} exact={true} />
        <Route path="/convert" component={Convert} exact={true} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

App.propTypes = {
  updateRates: PropTypes.func
};

App = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);

export { App };
