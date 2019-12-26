import { combineReducers } from 'redux';

import count from '~/store/count/reducer';
const rootReducer = combineReducers({
  count,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
