import { FETCH_HISTORICAL_DATA } from '../actions';

const initialState = {
  coin_list: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_HISTORICAL_DATA:
    console.log(action.payload.data);
      return {
        ...state,
        coin_list: action.payload.data
      }
    default:
      return state;
  }
}
