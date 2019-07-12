import { NavigationDispatch } from "react-navigation";
import { call } from "redux-saga/effects";
import { showError } from '../../components/ui/messages';
import { Navigate } from "../actions";

export type NavigationDispatchProvider = () => NavigationDispatch | null;

export function* navigateSaga(dispatchProvider: NavigationDispatchProvider, action: Navigate) {
    const dispatch = dispatchProvider();
    if (dispatch !== null) {
        console.log("Navigating to " + JSON.stringify(action.action));
        yield call(dispatch, action.action);
    } else {
        console.log("Navigation fail");
        yield call(showError, "Ooops. Something went wrong.");
    }
};

