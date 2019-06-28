import { createStore, combineReducers, compose } from "redux";
import placesReducer from "./reducers/places";

const rootReducer = combineReducers({
    places: placesReducer
});

const composeEnhancers = __DEV__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
