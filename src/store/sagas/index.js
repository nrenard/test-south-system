import { all } from 'redux-saga/effects';

import booksSaga from './books';
import favoritesSaga from './favorites';

export default function* rootSaga() {
  yield all([booksSaga(), favoritesSaga()]);
}
