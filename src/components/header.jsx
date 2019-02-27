import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

export const Header = () => (
  <div className="header">
    <NavLink
      className="header__item"
      exact={true}
      activeClassName="header__item--active"
      to="/"
    >
      Balances
    </NavLink>
    <NavLink
      className="header__item"
      exact={true}
      activeClassName="header__item--active"
      to="/convert"
    >
      Convert
    </NavLink>
  </div>
);
