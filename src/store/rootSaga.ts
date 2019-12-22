import { all, fork } from 'redux-saga/effects';
import dashboardSaga from '~/store/dashboard/sagas';

export default function* rootSaga() {
  yield all([fork(dashboardSaga)]);
}
