import { applyMiddleware, compose, createStore, Reducer, Store } from "redux";
import createSagaMiddleware, { Saga } from 'redux-saga';
import { NavigationDispatch } from "react-navigation";
import { NavigationDispatchProvider } from "./sagas/navigation";

const composeEnhancers = __DEV__ && typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default function configureStore<S>(rootReducer: Reducer<S>, rootSaga: Saga, dispatchProvider: NavigationDispatchProvider): Store<S> {
    const middleware = [];
    const enhancers = [];

    // Saga middleware
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    // Assemble middleware
    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga, store, dispatchProvider);
    return store;
};
