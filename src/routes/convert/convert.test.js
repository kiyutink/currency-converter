import React from "react";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import { Enzyme } from "../../enzyme";
import { Convert } from "./convert";
import { ConverterInput } from "../../components/converterInput/converterInput";
import { CurrencySelector } from "../../components/currencySelector/currencySelector";

const mockStore = createStore();
const state = {
  balances: {
    USD: 1,
    EUR: 2,
    GBP: 3
  },
  rates: {
    USD: 1,
    EUR: 1.5,
    GBP: 2
  }
};
const makeWrapper = () => {
  const store = mockStore(state);
  return Enzyme.mount(
    <Provider store={store}>
      <Convert />
    </Provider>
  );
};

describe("<Convert />", () => {
  it("renders 2 inputs and 2 currency selectors", () => {
    const wrapper = makeWrapper();
    expect(wrapper.find(ConverterInput)).toHaveLength(2);
    expect(wrapper.find(CurrencySelector)).toHaveLength(2);
  });

  it("renders hints", () => {
    const wrapper = makeWrapper();
    expect(wrapper.find(".convert__hint")).toHaveLength(2);
  });

  it("renders convert button", () => {
    const wrapper = makeWrapper();
    expect(wrapper.find(".convert__button")).toHaveLength(1);
  });
});
