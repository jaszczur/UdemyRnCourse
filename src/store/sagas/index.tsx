import { all } from 'redux-saga/effects';
import { Saga } from 'redux-saga';

export default function* rootSaga() {
    yield all([
        //   // some sagas only receive an action
        //   takeLatest(StartupTypes.STARTUP, startup),

        //   // some sagas receive extra parameters in addition to an action
        //   takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    ]);
};
