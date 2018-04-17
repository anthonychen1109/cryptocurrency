import { FETCH_COINS, FETCH_ALL_COINS } from '../actions';

const initialState = {
  coin_list: [],
  coin_list_all: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_COINS:
      // console.log('reducer', action.payload.data);
      return {
        ...state,
        coin_list: action.payload.data
      }
    case FETCH_ALL_COINS:
      console.log('reducer', action.payload.data);
      return {
        ...state,
        coin_list_all: action.payload.data
      }
    default:
      return state
  }
}
