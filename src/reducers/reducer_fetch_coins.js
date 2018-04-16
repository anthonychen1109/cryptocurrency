import { FETCH_COINS } from '../actions';

const initialState = {
  coin_list: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_COINS:
      console.log('reducer', action.payload.data);
      return {
        ...state,
        coin_list: [...state, action.payload.data]
      }
    default:
      return state
  }
}
