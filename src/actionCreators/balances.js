export const addToBalance = (currency, amount) => ({
  type: "ADD_TO_BALANCE",
  amount,
  currency
});

export const subtractFromBalance = (currency, amount) => ({
  type: "SUBTRACT_FROM_BALANCE",
  amount,
  currency
});
