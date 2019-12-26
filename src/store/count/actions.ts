import { createAction } from 'typesafe-actions';

export const INCREASE = 'count/INCREASE';

export const increase = createAction(INCREASE)<void>();