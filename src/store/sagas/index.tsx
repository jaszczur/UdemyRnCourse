import { all, takeEvery, call, put } from 'redux-saga/effects';
import { Saga } from 'redux-saga';
import { ActionType } from '../actions/types';
import { Action } from 'redux';
import { AddPlace, placeImageFetched } from '../actions';
import API from "../../api";
import { Image } from 'react-native';


function* fetchPlaceImage(action: AddPlace) {
    try {
        const placeImageUrl = yield call(API.findPlaceImageUrl, action.place.name);
        yield call(Image.prefetch, placeImageUrl);5
        yield put(placeImageFetched(action.place.key, placeImageUrl));
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(ActionType.ADD_PLACE, fetchPlaceImage),
        //   // some sagas only receive an action
        //   takeLatest(StartupTypes.STARTUP, startup),

        //   // some sagas receive extra parameters in addition to an action
        //   takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    ]);
};
