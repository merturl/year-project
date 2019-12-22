import { combineReducers } from 'redux';

import dashboard from '~/store/dashboard/reducer';
const rootReducer = combineReducers({
  dashboard,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
