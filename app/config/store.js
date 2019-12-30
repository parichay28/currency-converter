import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from '../reducers';
import rootSaga from '../config/sagas';

const sagaMiddlware = createSagaMiddleware();

const middlwares = [sagaMiddlware];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlwares));

sagaMiddlware.run(rootSaga);

export default store;
