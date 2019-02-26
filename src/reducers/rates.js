export default (state = null, action) => {
  switch (action.type) {
    case "UPDATE_RATES_RESPONSE":
      return {
        ...state,
        ...action.rates
      };
    default:
      return state;
  }
};
