import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Api from 'src/api';
import {persistedReducer} from 'store/RootReducer';
import rootSaga from 'store/RootSaga';

const api = new Api();

const sagaMiddleware = createSagaMiddleware({
  context: {
    api,
  },
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
