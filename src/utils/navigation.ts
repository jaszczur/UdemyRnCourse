import { useDispatch } from "react-redux";
import { NavigationAction } from "react-navigation";
import { navigate } from "../store/actions";
import { Dispatch } from "react";

export function useNavigation(dispatch?: Dispatch<any>): (action: NavigationAction) => void {
    const disp = typeof dispatch === "undefined" ? useDispatch() : dispatch;
    return action => disp(navigate(action));
}
