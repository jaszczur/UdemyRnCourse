import { Action } from "redux";

export enum ActionType {
    ADD_PLACE = "ADD_PLACE",
    DELETE_SELECTED_PLACE = "DELETE_SELECTED_PLACE",
    SELECT_PLACE = "SELECT_PLACE",
    DESELECT_PLACE = "DESELECT_PLACE",
}

export type ApplicationAction = Action<ActionType>
