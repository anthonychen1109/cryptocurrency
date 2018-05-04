import { SIGN_UP } from '../actions';

const initialState = {
  username: '',
  password: ''
}

export default function(state=initialState, action) {
  switch(action.type) {
    case SIGN_UP:
    console.log('reducer signup', action.payload);
      return {
        ...state,
        username: '',
        password: ''
      }
    default:
      return state;
  }
}
