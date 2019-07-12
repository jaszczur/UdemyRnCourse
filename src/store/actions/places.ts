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

export interface PlaceDeleted extends ApplicationAction {
    type: ActionType.PLACE_DELETED,
    placeId: PlaceId
}
export const placeDeleted = (placeId: PlaceId): PlaceDeleted => ({
    type: ActionType.PLACE_DELETED,
    placeId
});

export interface PlaceImageFetched extends ApplicationAction {
    type: ActionType.PLACE_IMAGE_FETCHED,
    placeId: PlaceId,
    imageUrl: string
}
export const placeImageFetched = (placeId: PlaceId, imageUrl: string): PlaceImageFetched => ({
    type: ActionType.PLACE_IMAGE_FETCHED,
    placeId,
    imageUrl
});

export type PlacesActionType = 
    AddPlace | DeletePlace | PlaceDeleted | PlaceImageFetched;
