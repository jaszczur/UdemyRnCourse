import { INITIAL_STATE, Places, Place } from "../model";
import { ActionType } from "../actions/types";
import { ApplicationActionType, AddPlace, DeletePlace, PlaceImageFetched, PlaceDeleted, } from "../actions";

const reduceAddPlace = (state: Places, action: AddPlace) => (
    {
        ...state,
        places: [...state.places, action.place]
    }
);

const reduceDeletePlace = (state: Places, action: PlaceDeleted) => {
    return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeId),
        selectedPlace: null
    };
};

const reducePlaceImageFetched = (state: Places, action: PlaceImageFetched) => {
    const currentPlace = state.places.find(p => p.key === action.placeId);
    if (typeof currentPlace === "undefined")
        return state;
    
    const updatedPlace: Place = {
        ...currentPlace,
        image: {
            uri: action.imageUrl
        }
    };

    return {
        ...state,
        places: state.places.map(place => 
            place.key === action.placeId ? updatedPlace : place),
    };
};

const reducer = (state: Places = INITIAL_STATE.places, action: ApplicationActionType): Places => {
    switch (action.type) {

        case ActionType.ADD_PLACE:
            return reduceAddPlace(state, action);

        case ActionType.DELETE_PLACE:
            return reduceDeletePlace(state, action);

        case ActionType.PLACE_IMAGE_FETCHED:
            return reducePlaceImageFetched(state, action);

        default:
            return state;

    }
};

export default reducer;
