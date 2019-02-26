import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <NavLink exact={true} activeStyle={{ fontSize: 20 }} to="/">
        balances
      </NavLink>
      <NavLink exact={true} activeStyle={{ fontSize: 20 }} to="/convert">
        convert
      </NavLink>
    </div>
  );
};
