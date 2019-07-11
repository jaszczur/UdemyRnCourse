import { Action } from "redux";

export enum ActionType {
    ADD_PLACE = "ADD_PLACE",
    DELETE_PLACE = "DELETE_PLACE",
    PLACE_IMAGE_FETCHED = "PLACE_IMAGE_FETCHED",
}

export type ApplicationAction = Action<ActionType>
