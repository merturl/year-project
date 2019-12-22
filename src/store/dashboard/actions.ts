import { createAction, createAsyncAction } from 'typesafe-actions';

import { Panel, DashboardState } from '~/store/dashboard/types';
import { DashboardResponseDto } from '~/lib/services/DashboardService';


export const LAYOUT_CHANGE = 'dashboard/LAYOUT_CHANGE';
export const RESIZE = 'dashboard/RESIZE';
export const ADD_PANEL = 'dashboard/ADD_PANEL';
export const REMOVE_PANEL = 'dashboard/REMOVE_PANEL';
export const VIEW_PANEL = 'dashboard/VIEW_PANEL';
export const EDIT_PANEL = 'dashboard/EDIT_PANEL';

export const layoutChange = createAction(LAYOUT_CHANGE)<ReactGridLayout.Layout[]>();
export const resize = createAction(RESIZE)<ReactGridLayout.Layout>();
export const addPanel = createAction(ADD_PANEL)<Panel>();
export const removePanel = createAction(REMOVE_PANEL)<number>();
export const viewPanel = createAction(VIEW_PANEL)<number>();
export const editPanel = createAction(EDIT_PANEL)<number>();

export const createDashboardAsync = createAsyncAction(
  'dashboard/CREATE_DASHBOARD_REQUEST',
  'dashboard/CREATE_DASHBOARD_SUCCESS',
  'dashboard/CREATE_DASHBOARD_FAILURE',
)<void, DashboardResponseDto, Error>();

export const updateDashboardAsync = createAsyncAction(
  'dashboard/UPDATE_DASHBOARD_REQUEST',
  'dashboard/UPDATE_DASHBOARD_SUCCESS',
  'dashboard/UPDATE_DASHBOARD_FAILURE',
)<void, DashboardState, Error>();

export const getDashboardAsync = createAsyncAction(
  'dashboard/GET_DASHBOARD_REQUEST',
  'dashboard/GET_DASHBOARD_SUCCESS',
  'dashboard/GET_DASHBOARD_FAILURE',
)<string, DashboardState, Error>();

export const getDashboardByUIDAsync = createAsyncAction(
  'dashboard/GET_DASHBOARD_BY_UID_REQUEST',
  'dashboard/GET_DASHBOARD_BY_UID_SUCCESS',
  'dashboard/GET_DASHBOARD_BY_UID_FAILURE',
)<string, DashboardResponseDto, Error>();