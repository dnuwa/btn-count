import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import resultSaga from '../sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(resultSaga);
    return store;
};

export default configureStore;