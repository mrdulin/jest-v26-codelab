import { put, call, takeLatest } from 'redux-saga/effects';
import { postJobService } from '../services/postJobServices';

export function* postJobSaga(payload) {
  try {
    const response = yield call(postJobService, payload);
    yield put({ type: 'POST_JOB_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'POST_JOB_ERROR', error });
  }
}

export function* watchPostJobSaga() {
  yield takeLatest('POST_JOB_REQUEST', postJobSaga);
}
