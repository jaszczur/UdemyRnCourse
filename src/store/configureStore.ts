import { createStore, combineReducers, compose, applyMiddleware, Reducer, Action, Store } from "redux";
import createSagaMiddleware, { Saga } from 'redux-saga'


// export default (rootReducer, rootSaga) => {
//     /* ------------- Redux Configuration ------------- */

//     const middleware = []
//     const enhancers = []

//     /* ------------- Navigation Middleware ------------ */
//     middleware.push(appNavigatorMiddleware)

//     /* ------------- Analytics Middleware ------------- */
//     middleware.push(ScreenTracking)

//     /* ------------- Saga Middleware ------------- */

//     const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
//     const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
//     middleware.push(sagaMiddleware)

//     /* ------------- Assemble Middleware ------------- */

//     enhancers.push(applyMiddleware(...middleware))

//     // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
//     const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
//     const store = createAppropriateStore(rootReducer, compose(...enhancers))

//     // kick off root saga
//     let sagasManager = sagaMiddleware.run(rootSaga)

//     return {
//       store,
//       sagasManager,
//       sagaMiddleware
//     }
//   }

const composeEnhancers = __DEV__ && typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default function configureStore<S>(rootReducer: Reducer<S>, rootSaga: Saga): Store<S> {
    const middleware = [];
    const enhancers = [];

    // Saga middleware
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    // Assemble middleware
    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};
