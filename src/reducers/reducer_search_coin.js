import { SEARCH_COIN } from '../actions';

const initialState = {
  coin_name: ''
}

export default function(state=initialState, action) {
  switch(action.type) {
    case SEARCH_COIN:
    console.log('reducer', action.payload);
      return {
        ...state,
        coin_name: action.payload
      }
    default:
      return state;
  }
}
