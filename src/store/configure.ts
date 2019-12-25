import { createStore, compose, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/store/rootReducer';
import rootSaga from '~/store/rootSaga';


const configure = (): Store => {
  const isDev = process.env.NODE_ENV === 'development';
  const devTool = isDev &&
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }));
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = devTool || compose;
  const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configure;
