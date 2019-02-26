import { Api } from "../api/api";

export const updateRates = () => dispatch => {
  dispatch({
    type: "UPDATE_RATES_REQUEST"
  });

  Promise.all([
    Api.getRates("EUR"),
    Api.getRates("USD"),
    Api.getRates("GBP")
  ]).then(
    ([eur, usd, gbp]) => {
      dispatch({
        type: "UPDATE_RATES_RESPONSE",
        rates: {
          EUR: eur.rates,
          GBP: gbp.rates,
          USD: usd.rates
        }
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
