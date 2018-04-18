import axios from 'axios';

const BASE_URL = 'https://api.coinmarketcap.com/v1/';
const BACKEND_URL = 'http://127.0.0.1:8000/';

export const FETCH_COINS = 'FETCH_COINS';
export const FETCH_ALL_COINS = 'FETCH_ALL_COINS';
export const FETCH_HISTORICAL_DATA = 'FETCH_HISTORICAL_DATA';

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

export function fetchHistoricalData() {
  const url =`${BACKEND_URL}coins/`;

  const request = axios.get(url);
  console.log('action', request);

  return {
    type: FETCH_HISTORICAL_DATA,
    payload: request
  }
}
