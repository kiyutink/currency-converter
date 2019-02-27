export const Api = {
  getRates() {
    return fetch(
      "https://openexchangerates.org/api/latest.json?app_id=3791d58dd3b840fa9a801b7a60e63b6e"
    ).then(res => res.json());
  }
};
