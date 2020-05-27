import { all, takeEvery } from 'redux-saga/effects';
import { ActionType } from '../actions/types';
import { placeDeletedSaga, placeAddedSaga } from './places';
import { navigateSaga, NavigationDispatchProvider } from './navigation';

export default function* rootSaga(
  dispatchProvider: NavigationDispatchProvider
) {
  yield all([
    takeEvery(ActionType.ADD_PLACE, placeAddedSaga),
    takeEvery(ActionType.DELETE_PLACE, placeDeletedSaga),
    takeEvery(ActionType.NAVIGATE, navigateSaga, dispatchProvider),
  ]);
}
