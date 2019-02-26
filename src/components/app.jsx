import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Balances } from "../routes/balances/balances";
import { Convert } from "../routes/convert/convert";
import { Header } from "./header";

export const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path="/" component={Balances} exact={true} />
      <Route path="/convert" component={Convert} exact={true} />
      <Redirect to="/" />
    </Switch>
  </React.Fragment>
);
