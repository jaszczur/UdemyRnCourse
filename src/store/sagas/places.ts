import { Image } from 'react-native';
import { call, put } from 'redux-saga/effects';
import API from "../../api";
import { showMessage } from '../../components/ui/messages';
import { AddPlace, DeletePlace, placeDeleted, placeImageFetched, navigate } from '../actions';
import { ApplicationState } from '../model';
import { NavigationActions } from 'react-navigation';


export function* fetchPlaceImage(action: AddPlace) {
    try {
        const placeImageUrl = yield call(API.findPlaceImageUrl, action.place.name);
        yield call(Image.prefetch, placeImageUrl);
        yield put(placeImageFetched(action.place.key, placeImageUrl));
    } catch (error) {
        yield call(showMessage, "Could not fetch image for " + action.place.name + "😞. We will use default one.");
        console.log(error);
    }
}

export function* deletePlace(stateProvider: () => ApplicationState, action: DeletePlace) {
    // TODO: call api
    const place = stateProvider().places.places.find(place => place.key === action.placeId);
    const placeName = typeof place === "undefined" ? "Somewhere" : place.name;
    yield put(placeDeleted(action.placeId));
    yield put(navigate(NavigationActions.back()));
    yield call(showMessage, "Place " + placeName + " has been deleted");
}
