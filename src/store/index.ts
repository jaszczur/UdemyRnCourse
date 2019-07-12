import { combineReducers } from "redux";
import placesReducer from "./reducers/places";
import configureStore, { NavigationDispatchProvider } from "./configureStore";
import rootSaga from "./sagas";
import { NavigationDispatch } from "react-navigation";

export const rootReducer = combineReducers({
    places: placesReducer
});

export default (dispatchProvider: NavigationDispatchProvider) => {
    return configureStore(rootReducer, rootSaga, dispatchProvider);
}
