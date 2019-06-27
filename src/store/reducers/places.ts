import { ApplicationState, INITIAL_STATE, Places } from "../model";
import { ActionType } from "../actions/types";
import { ApplicationActionType, AddPlace, DeleteSelectedPlace, SelectPlace, DeselectPlace } from "../actions";

const reduceAddPlace = (state: Places, action: AddPlace) => (
    {
        ...state,
        places: [...state.places, action.place]
    }
);

const reduceDeleteSelectedPlace = (state: Places, action: DeleteSelectedPlace) => {
    const selectedPlace = state.selectedPlace;
    if (selectedPlace !== null) {
        return {
            ...state,
            places: state.places.filter(place => place.key !== selectedPlace.key),
            selectedPlace: null
        };
    } else {
        return state;
    }
};

const reduceSelectPlace = (state: Places, action: SelectPlace) => {
    const placeToSelect = state.places.find(place => place.key === action.placeId);
    if (typeof placeToSelect !== "undefined") {
        return {
            ...state,
            selectedPlace: placeToSelect
        };
    } else {
        return state;
    }
};

const reduceDeselectPlace = (state: Places, action: DeselectPlace) => (
    {
        ...state,
        selectedPlace: null
    }
);

const reducer = (state: Places = INITIAL_STATE.places, action: ApplicationActionType): Places => {
    switch (action.type) {

        case ActionType.ADD_PLACE:
            return reduceAddPlace(state, action);

        case ActionType.DELETE_SELECTED_PLACE:
            return reduceDeleteSelectedPlace(state, action);

        case ActionType.SELECT_PLACE:
            return reduceSelectPlace(state, action);

        case ActionType.DESELECT_PLACE:
            return reduceDeselectPlace(state, action);

        default:
            return state;

    }
};

export default reducer;
