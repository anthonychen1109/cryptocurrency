import axios from 'axios';

const BASE_URL = 'https://api.coinmarketcap.com/v1/';
const BACKEND_URL = 'http://127.0.0.1:8000/';

export const FETCH_COINS = 'FETCH_COINS';
export const FETCH_ALL_COINS = 'FETCH_ALL_COINS';
export const FETCH_HISTORICAL_DATA = 'FETCH_HISTORICAL_DATA';
export const SEARCH_COIN = 'SEARCH_COIN';
export const SIGN_UP = 'SIGN_UP';

export function fetchCoins() {
  const url = `${BASE_URL}ticker/?limit=10`;

  const request = axios.get(url);
  // console.log('action', request);

  return {
    type: FETCH_COINS,
    payload: request
  }
}

export function fetchAllCoins() {
  const url = `${BASE_URL}ticker/`;

  const request = axios.get(url);
  console.log('action', request);

  return {
    type: FETCH_ALL_COINS,
    payload: request
  }
}

export function fetchHistoricalData(sym) {
  let symbol = sym.toUpperCase();
  const url =`${BACKEND_URL}coins/${symbol}`;

  const request = axios.get(url)
  console.log('action', request);

  return {
    type: FETCH_HISTORICAL_DATA,
    payload: request
  }
}

export function searchCoin(name) {
  const url = `${BASE_URL}ticker/${name}/`
  const request = axios.get(url)
    .then(res => res.data[0])
    .catch(err => err);

  return {
    type: SEARCH_COIN,
    payload: request
  }
}

export function signUp(username, password) {
  const url = `${BACKEND_URL}create/`
  const request = axios.post(url,
    {
      username: username,
      password: password
    }
  ).then(response => console.log(response))
  .catch(err => console.log(err));
  console.log('signup', request);

  return {
    type: SIGN_UP,
    payload: request
  }
}
