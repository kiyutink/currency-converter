export const Api = {
  getRates(base) {
    return new Promise(res => {
      setTimeout(() => {
        switch (base) {
          case "USD":
            res({
              base: "USD",
              rates: {
                EUR: 1.1,
                GBP: 1.2
              }
            });
            break;
          case "EUR":
            res({
              base: "EUR",
              rates: {
                USD: 0.9,
                GBP: 1.1
              }
            });
            break;

          case "GBP":
            res({
              base: "GBP",
              rates: {
                EUR: 0.9,
                USD: 0.8
              }
            });
        }
      }, 500);
    });
  }
};
