export const Api = {
  getRates(base) {
    return new Promise(res => {
      setTimeout(() => {
        switch (base) {
          case "USD":
            res({
              base: "USD",
              rates: {
                EUR: 1.1 + Math.random() / 10,
                GBP: 1.2 + Math.random() / 10
              }
            });
            break;
          case "EUR":
            res({
              base: "EUR",
              rates: {
                USD: 0.9 + Math.random() / 10,
                GBP: 1.1 + Math.random() / 10
              }
            });
            break;

          case "GBP":
            res({
              base: "GBP",
              rates: {
                EUR: 0.9 + Math.random() / 10,
                USD: 0.8 + Math.random() / 10
              }
            });
        }
      }, 500);
    });
  }
};
