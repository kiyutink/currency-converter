const initialState = {
  EUR: 123.45,
  USD: 67.89,
  GBP: 101.12
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BALANCE":
      return {
        ...state,
        [action.currency]: +(state[action.currency] + action.amount).toFixed(2)
      };
    case "SUBTRACT_FROM_BALANCE":
      return {
        ...state,
        [action.currency]: +(state[action.currency] - action.amount).toFixed(2)
      };
    default:
      return state;
  }
};
