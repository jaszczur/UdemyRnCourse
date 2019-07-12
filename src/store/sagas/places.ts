import { Image } from 'react-native';
import { StackActions } from 'react-navigation';
import { all, call, put } from 'redux-saga/effects';
import API from "../../api";
import { showMessage } from '../../components/ui/messages';
import { AddPlace, DeletePlace, navigate, placeImageFetched } from '../actions';


export function* placeAddedSaga(action: AddPlace) {
    try {
        yield put(navigate(StackActions.push({
            routeName: "NewPlaceDetails",
            params: {
                placeId: action.place.key,
                placeName: action.place.name
            }
        })));
        const placeImageUrl = yield call(API.findPlaceImageUrl, action.place.name);
        yield call(Image.prefetch, placeImageUrl);
        yield put(placeImageFetched(action.place.key, placeImageUrl));
    } catch (error) {
        yield call(showMessage, "Could not fetch image for " + action.place.name + "😞. We will use default one.");
        console.log(error);
    }
}

export function* placeDeletedSaga(action: DeletePlace) {
    // TODO: call api
    yield all([
        put(navigate(StackActions.popToTop({}))),
        call(showMessage, "Place has been deleted")
    ]);
}
