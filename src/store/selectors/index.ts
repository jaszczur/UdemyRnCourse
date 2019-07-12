import { ApplicationState, Place, PlaceId } from "../model";

export const findPlaceById = (state: ApplicationState, placeId: PlaceId): Place | undefined =>
    state.places.places.find(place => place.key === placeId);
