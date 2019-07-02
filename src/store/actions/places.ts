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

export interface DeletePlace extends ApplicationAction {
    type: ActionType.DELETE_PLACE,
    placeId: PlaceId
}
export const deletePlace = (placeId: PlaceId): DeletePlace => ({
    type: ActionType.DELETE_PLACE,
    placeId
});

export type PlacesActionType = 
    AddPlace | DeletePlace;
