import { combineReducers } from 'redux';

import coin_collection from './reducer_fetch_coins';
import coin_history from './reducer_fetch_historical_data';
import search_coin from './reducer_search_coin';

const rootReducer = combineReducers({
  coin_collection,
  coin_history,
  search_coin
})

export default rootReducer;
