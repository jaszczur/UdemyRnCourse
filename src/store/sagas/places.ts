import { Image } from 'react-native';
import { call, put, all, select } from 'redux-saga/effects';
import API from "../../api";
import { showMessage } from '../../components/ui/messages';
import { AddPlace, DeletePlace, placeDeleted, placeImageFetched, navigate } from '../actions';
import { ApplicationState } from '../model';
import { NavigationActions } from 'react-navigation';
import { findPlaceById } from '../selectors';


export function* fetchPlaceImageSaga(action: AddPlace) {
    try {
        const placeImageUrl = yield call(API.findPlaceImageUrl, action.place.name);
        yield call(Image.prefetch, placeImageUrl);
        yield put(placeImageFetched(action.place.key, placeImageUrl));
    } catch (error) {
        yield call(showMessage, "Could not fetch image for " + action.place.name + "😞. We will use default one.");
        console.log(error);
    }
}

export function* deletePlaceSaga(action: DeletePlace) {
    // TODO: call api
    const place = yield select(findPlaceById, action.placeId);
    const placeName = typeof place === "undefined" ? "Somewhere" : place.name;
    yield all([
        put(placeDeleted(action.placeId)),
        put(navigate(NavigationActions.back())),
        call(showMessage, "Place " + placeName + " has been deleted")
    ]);
}
