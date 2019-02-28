import React from "react";
import { Enzyme } from "../../enzyme";
import { Header } from "../header/header";
import { NavLink } from "react-router-dom";

describe("<Header />", () => {
  it("Renders two <NavLinks />", () => {
    const wrapper = Enzyme.shallow(<Header />);

    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
});
