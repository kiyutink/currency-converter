import React from "react";
import createStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Enzyme } from "../../enzyme";
import { Balances } from "./balances";
import { WalletBalance } from "../../components/walletBalance/walletBalance";

const mockStore = createStore();

describe("<Balances />", () => {
  it("Renders all wallets", () => {
    const store = mockStore({
      balances: {
        EUR: 1,
        USD: 2
      }
    });
    const wrapper = Enzyme.mount(
      <Provider store={store}>
        <Balances />
      </Provider>
    );

    expect(wrapper.find(WalletBalance)).toHaveLength(2);
  });
});
