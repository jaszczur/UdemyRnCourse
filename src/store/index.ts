import { combineReducers } from "redux";
import placesReducer from "./reducers/places";
import configureStore from "./configureStore";
import rootSaga from "./sagas";

export const rootReducer = combineReducers({
    places: placesReducer
});

export default () => {
    return configureStore(rootReducer, rootSaga);
}
