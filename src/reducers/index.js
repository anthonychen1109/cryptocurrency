import { combineReducers } from 'redux';

import coin_collection from './reducer_fetch_coins';

const rootReducer = combineReducers({
  coin_collection
})

export default rootReducer;
