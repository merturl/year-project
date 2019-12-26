import { increase } from '~/store/count/actions';
import { createReducer } from "typesafe-actions";
import { CountState, CountAction } from './types';

const initialState: CountState = {
  value: 0
};

const dashboard = createReducer<CountState, CountAction>(initialState)
  .handleAction(increase, (state, action) => ({
    ...state,
    value: state.value+1
  }))

export default dashboard;
