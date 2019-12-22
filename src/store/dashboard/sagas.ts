import { SagaIterator } from 'redux-saga';
import { all, select, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';


import { PAGE_PATHS } from '~/constants';
import { createDashboardAsync, getDashboardAsync, getDashboardByUIDAsync, updateDashboardAsync } from './actions';
import { Dashboard, DashboardState } from './types';
import { RootState } from '../rootReducer';
import DashboardService, { DashboardRequestDto, DashboardResponseDto } from '~/lib/services/DashboardService';

function* saveDashboardSaga(): SagaIterator {
  const getDashboard = (state: RootState) => state.dashboard;
  const state = yield select(getDashboard);
  const dashboard = <Dashboard>state;
  const dashboardDTO: DashboardRequestDto = {
    id: dashboard.id || null,
    uid: dashboard.uid,
    type: dashboard.type,
    data: JSON.stringify(dashboard.panels)
  }

  try {
    const response = yield call(DashboardService.createDashboard, dashboardDTO);
    console.log(response);
  } catch (err) {
    yield put(createDashboardAsync.failure(err));
  }
}

function* updateDashboardSaga(): SagaIterator {
  const getDashboard = (state: RootState) => state.dashboard;
  const state = yield select(getDashboard);
  const dashboard = <Dashboard>state;
  const dashboardDTO: DashboardRequestDto = {
    id: dashboard.id || null,
    uid: dashboard.uid,
    type: dashboard.type,
    data: JSON.stringify(dashboard.panels)
  }

  try {
    const response = yield call(DashboardService.updateDashboard, dashboardDTO);
    const { data } = <AxiosResponse>response;
    const dashboardResponseDTO = <DashboardResponseDto>data;
    dashboard.id = dashboardResponseDTO.dashboard.id!;
    dashboard.uid = dashboardResponseDTO.dashboard.uid!;
    dashboard.type = dashboardResponseDTO.dashboard.type!;
    dashboard.panels = JSON.parse(dashboardResponseDTO.dashboard.data);
    yield put(updateDashboardAsync.success(dashboard));
  } catch (err) {
    yield put(updateDashboardAsync.failure(err));
  }
}

function* getDashboardSaga(action: ReturnType<typeof getDashboardAsync.request>): SagaIterator {
  if (action.payload === PAGE_PATHS.NEW_DASHBOARD) {
    const dashboard: DashboardState = {
      id: undefined,
      uid: undefined,
      title: 'new dashboard',
      type: 'dashboard',
      panels: [],
    }
    yield put(getDashboardAsync.success(dashboard));
    return;
  }
  try {
    const response = yield call(DashboardService.geDashboard);
    const { data } = <AxiosResponse>response;
    const dashboardDTO = <DashboardResponseDto>data;
    const dashboard: DashboardState = {
      id: dashboardDTO.dashboard.id || 1,
      uid: dashboardDTO.dashboard.uid,
      title: 'home',
      type: dashboardDTO.dashboard.type,
      panels: JSON.parse(dashboardDTO.dashboard.data),
    }
    yield put(getDashboardAsync.success(dashboard));
  } catch (err) {
    console.log(err);
    yield put(getDashboardAsync.failure(err));
  }
}

function* getDashboardByUIDSaga(action: ReturnType<typeof getDashboardByUIDAsync.request>): SagaIterator {
  try {
    const response = yield call(DashboardService.getDashboardByUID, action.payload);
  } catch (err) {
    yield put(createDashboardAsync.failure(err));
  }
}

export default function* dashboardSagas() {
  yield all([
    takeLatest(getDashboardAsync.request, getDashboardSaga),
    takeLatest(createDashboardAsync.request, saveDashboardSaga),
    takeLatest(updateDashboardAsync.request, updateDashboardSaga),
    takeLatest(getDashboardByUIDAsync.request, getDashboardByUIDSaga),
  ]);
}
