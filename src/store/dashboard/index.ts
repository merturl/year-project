import * as dashboardActions from '~/store/dashboard/actions';
import * as dashboardReducers from '~/store/dashboard/reducer';
import * as dashboardSagas from '~/store/dashboard/sagas';
import * as dashboardTypes from '~/store/dashboard/types';
export default {
  ...dashboardActions,
  ...dashboardReducers,
  ...dashboardSagas,
  ...dashboardTypes,
}
