import { ActionType } from 'typesafe-actions';

import * as actions from '~/store/dashboard/actions';

export type DashboardAction = ActionType<typeof actions>;

export type GridPos = {
  x: number,
  y: number,
  w: number,
  h: number
}

export type Panel = {
  id: number;
  type: string;
  gridPos: GridPos;
}

export type Dashboard = {
  id?: number;
  uid?: string;
  title: string;
  type: string;
  panels: Panel[];
}

export type DashboardState = {
  id?: number;
  uid?: string;
  title: string;
  type: string;
  panels: Panel[];
}
