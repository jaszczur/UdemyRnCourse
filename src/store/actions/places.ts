import { ActionType, ApplicationAction } from "./types";
import { Place, PlaceId } from "../model";

export interface AddPlace extends ApplicationAction {
    type: ActionType.ADD_PLACE,
    place: Place
}
export const addPlace = (place: Place): AddPlace => ({
    type: ActionType.ADD_PLACE,
    place
});

export interface DeleteSelectedPlace extends ApplicationAction {
    type: ActionType.DELETE_SELECTED_PLACE,
}
export const deleteSelectedPlace = (): DeleteSelectedPlace => ({
    type: ActionType.DELETE_SELECTED_PLACE
});

export interface SelectPlace extends ApplicationAction {
    type: ActionType.SELECT_PLACE,
    placeId: PlaceId
}
export const selectPlace = (placeId: PlaceId): SelectPlace => ({
    type: ActionType.SELECT_PLACE,
    placeId
});

export interface DeselectPlace extends ApplicationAction {
    type: ActionType.DESELECT_PLACE,
}
export const deselectPlace = (): DeselectPlace => ({
    type: ActionType.DESELECT_PLACE,
});

export type PlacesActionType = 
    AddPlace | DeleteSelectedPlace | SelectPlace | DeselectPlace;
