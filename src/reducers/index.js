import { combineReducers } from 'redux';

import coin_collection from './reducer_fetch_coins';
import coin_history from './reducer_fetch_historical_data';

const rootReducer = combineReducers({
  coin_collection,
  coin_history,
})

export default rootReducer;
