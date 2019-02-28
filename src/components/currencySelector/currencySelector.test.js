import React from "react";
import { Enzyme } from "../../enzyme";
import { CurrencySelector } from "./currencySelector";

describe("<CurrencySelector />", () => {
  it("Renders two buttons", () => {
    const wrapper = Enzyme.shallow(
      <CurrencySelector
        availableCurrencies={["USD", "GBP"]}
        initialValue="GBP"
      />
    );
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("Renders correct initial value", () => {
    const wrapper = Enzyme.shallow(
      <CurrencySelector
        availableCurrencies={["USD", "GBP"]}
        initialValue="GBP"
      />
    );
    expect(wrapper.find(".currencySelector__sign").text()).toEqual("£");
  });

  it("Calls onChange on click", () => {
    const onChange = jest.fn();

    const wrapper = Enzyme.shallow(
      <CurrencySelector
        availableCurrencies={["USD", "GBP"]}
        initialValue="GBP"
        onChange={onChange}
      />
    );
    wrapper
      .find("button")
      .at(1)
      .simulate("click");

    expect(onChange).toHaveBeenCalledWith("USD");
  });
});
