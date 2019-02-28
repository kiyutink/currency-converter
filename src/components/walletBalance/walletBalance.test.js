import React from "react";
import { Enzyme } from "../../enzyme";
import { WalletBalance } from "./walletBalance";

describe("<WalletBalance />", () => {
  it("Renders the right value", () => {
    const wrapper = Enzyme.shallow(
      <WalletBalance balance={3} currency="USD" />
    );

    expect(wrapper.find(".walletBalance__value").text()).toEqual("3");
  });

  it("Renders the currency", () => {
    const wrapper = Enzyme.shallow(
      <WalletBalance balance={3} currency="USD" />
    );
    expect(wrapper.find(".walletBalance__code").text()).toEqual("$");
  });
});
