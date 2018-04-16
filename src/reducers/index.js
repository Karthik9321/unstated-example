import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';
import AmountReducer from './reducer_amount';

const rootReducer = combineReducers({
  // keys here are states of different pieces returned by reducers
  count: CounterReducer,
  amount: AmountReducer
});

export default rootReducer;