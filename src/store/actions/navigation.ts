import { ActionType, ApplicationAction } from "./types";
import { NavigationAction } from "react-navigation";

export interface Navigate extends ApplicationAction {
    type: ActionType.NAVIGATE,
    action: NavigationAction
}

export const navigate = (action: NavigationAction): Navigate => ({
    type: ActionType.NAVIGATE,
    action
});

export type NavigationActionType = 
    Navigate;
