import { Store } from 'redux';
import { all, takeEvery } from 'redux-saga/effects';
import { ActionType } from '../actions/types';
import { ApplicationState } from '../model';
import { deletePlace, fetchPlaceImage } from './places';
import { navigate, NavigationDispatchProvider } from './navigation';

export default function* rootSaga(store: Store<ApplicationState>, dispatchProvider: NavigationDispatchProvider) {
    yield all([
        takeEvery(ActionType.ADD_PLACE, fetchPlaceImage),
        takeEvery(ActionType.DELETE_PLACE, deletePlace, () => store.getState()),

        takeEvery(ActionType.NAVIGATE, navigate, dispatchProvider),
        //   // some sagas only receive an action
        //   takeLatest(StartupTypes.STARTUP, startup),

        //   // some sagas receive extra parameters in addition to an action
        //   takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    ]);
};
