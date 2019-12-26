import { all, fork } from 'redux-saga/effects';
import countSaga from '~/store/count/sagas';

export default function* rootSaga() {
  yield all([fork(countSaga)]);
}
