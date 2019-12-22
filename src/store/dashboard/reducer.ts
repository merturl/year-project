import { getDashboardAsync, removePanel } from './actions';
import { addPanel } from '~/store/dashboard/actions';
import { layoutChange } from '~/store/dashboard/actions';
import { createReducer } from "typesafe-actions";

import {  DashboardAction, DashboardState, Panel } from "~/store/dashboard/types";

const initialState: DashboardState = {
  id: undefined,
  uid: undefined,
  title: 'Home',
  type: 'dashboard',
  panels: <Panel[]>[]
};

const dashboard = createReducer<DashboardState, DashboardAction>(initialState)
  .handleAction(layoutChange, (state, action) => ({
    ...state,
    panels: state.panels.map((panel, i) => ({ ...panel, gridPos: {x: action.payload[i].x, y: action.payload[i].y, w: action.payload[i].w, h: action.payload[i].h} }))
  }))
  .handleAction(addPanel, (state, action) => ({
    ...state,
    panels: [action.payload, ...state.panels]
  }))
  .handleAction(removePanel, (state, action) => ({
    ...state,
    panels: state.panels.filter((panel)=> panel.id !== action.payload)
  }))
  .handleAction(getDashboardAsync.success, (state, action) => ({
    ...state,
    id: action.payload.id,
    uid: action.payload.uid,
    type: action.payload.type,
    panels: action.payload.panels,
  }));

export default dashboard;
