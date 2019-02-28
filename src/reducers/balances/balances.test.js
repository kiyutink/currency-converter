import reducer, { initialState } from "./balances";

it("Should create initial state", () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it("Should add to balance", () => {
  expect(
    reducer({ GBP: 5 }, { type: "ADD_TO_BALANCE", amount: 10, currency: "GBP" })
  ).toEqual({
    GBP: 15
  });
});

it("Should subtract from balance", () => {
  expect(
    reducer(
      { GBP: 5 },
      { type: "SUBTRACT_FROM_BALANCE", amount: 3, currency: "GBP" }
    )
  ).toEqual({
    GBP: 2
  });
});

it("Should ignore actions that are not handled by this reducer", () => {
  expect(
    reducer(
      {
        USD: 1
      },
      {
        type: "UNHANDLED_TYPE",
        amount: 200,
        currency: "GBP"
      }
    )
  ).toEqual({
    USD: 1
  });
});
