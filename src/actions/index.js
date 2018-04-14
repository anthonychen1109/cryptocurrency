import axios from 'axios';

const BASE_URL = 'https://api.coinmarketcap.com/v1/';

export const FETCH_COINS = 'FETCH_COINS';

export function fetchCoins() {
  const url = `${BASE_URL}ticker/?limit=10`;

  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_COINS,
    payload: request
  }
}
