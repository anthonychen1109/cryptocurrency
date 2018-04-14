import { FETCH_COINS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_COINS:
      console.log(action.payload);
      return {
        ...state,
        coins: action.payload.data
      }
    default:
      return state
  }
}
