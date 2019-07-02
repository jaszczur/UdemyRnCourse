import { Action } from "redux";

export enum ActionType {
    ADD_PLACE = "ADD_PLACE",
    DELETE_PLACE = "DELETE__PLACE"
}

export type ApplicationAction = Action<ActionType>
