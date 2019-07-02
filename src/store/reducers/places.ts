import { INITIAL_STATE, Places } from "../model";
import { ActionType } from "../actions/types";
import { ApplicationActionType, AddPlace, DeletePlace, } from "../actions";

const reduceAddPlace = (state: Places, action: AddPlace) => (
    {
        ...state,
        places: [...state.places, action.place]
    }
);

const reduceDeletePlace = (state: Places, action: DeletePlace) => {
    return {
        ...state,
        places: state.places.filter(place => place.key !== action.placeId),
        selectedPlace: null
    };
};

const reducer = (state: Places = INITIAL_STATE.places, action: ApplicationActionType): Places => {
    switch (action.type) {

        case ActionType.ADD_PLACE:
            return reduceAddPlace(state, action);

        case ActionType.DELETE_PLACE:
            return reduceDeletePlace(state, action);

        default:
            return state;

    }
};

export default reducer;
