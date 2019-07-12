import { Store } from 'redux';
import { all, takeEvery } from 'redux-saga/effects';
import { ActionType } from '../actions/types';
import { ApplicationState } from '../model';
import { deletePlaceSaga, fetchPlaceImageSaga } from './places';
import { navigateSaga, NavigationDispatchProvider } from './navigation';

export default function* rootSaga(dispatchProvider: NavigationDispatchProvider) {
    yield all([
        takeEvery(ActionType.ADD_PLACE, fetchPlaceImageSaga),
        takeEvery(ActionType.DELETE_PLACE, deletePlaceSaga),
        takeEvery(ActionType.NAVIGATE, navigateSaga, dispatchProvider),
    ]);
};
