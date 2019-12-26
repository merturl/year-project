import * as countActions from '~/store/count/actions';
import * as countReducers from '~/store/count/reducer';
import * as countSagas from '~/store/count/sagas';
import * as countTypes from '~/store/count/types';
export default {
  ...countActions,
  ...countReducers,
  ...countSagas,
  ...countTypes,
}
