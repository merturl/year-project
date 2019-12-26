import { ActionType } from 'typesafe-actions';

import * as actions from '~/store/count/actions';

export type CountAction = ActionType<typeof actions>;

export type Count = {
  value: number;
}

export type CountState = {
  value: number;
}
