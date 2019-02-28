import reducer from "./rates";

it("Should create initial state eqal to null", () => {
  expect(reducer(undefined, {})).toEqual(null);
});

it("Should update rates", () => {
  expect(
    reducer(
      { GBP: 5 },
      {
        type: "UPDATE_RATES_RESPONSE",
        rates: {
          GBP: 2,
          USD: 3
        }
      }
    )
  ).toEqual({
    GBP: 2,
    USD: 3
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
        rates: {
          GBP: 1,
          USD: 2
        }
      }
    )
  ).toEqual({ USD: 1 });
});
