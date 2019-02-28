import React from "react";
import { Enzyme } from "../../enzyme";
import { App } from "./app";
import { Switch } from "react-router";
import { Header } from "../header/header";

describe("<App />", () => {
  it("Renders a header and a switch", () => {
    const wrapper = Enzyme.shallow(<App />);

    expect(wrapper.containsMatchingElement(Switch)).toEqual(true);
    expect(wrapper.containsMatchingElement(Header)).toEqual(true);
  });
});
