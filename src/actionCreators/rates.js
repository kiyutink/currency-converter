import { Api } from "../api/api";

export const updateRates = () => dispatch => {
  dispatch({
    type: "UPDATE_RATES_REQUEST"
  });

  Api.getRates().then(
    response => {
      dispatch({
        type: "UPDATE_RATES_RESPONSE",
        rates: response.rates
      });
    },
    err => {
      dispatch({
        type: "UPDATE_RATES_ERROR",
        err
      });
    }
  );
};
