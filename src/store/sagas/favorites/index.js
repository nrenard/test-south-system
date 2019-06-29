import {
  all, takeLatest, put, select,
} from 'redux-saga/effects';

import {
  getFavorites as getFavoritesService,
  setFavorites as setFavoritesService,
} from '../../../services/storage';

import { Creators, Types } from '../../ducks/favorites';
import { Types as BookTypes } from '../../ducks/books';

export function* getFavorites() {
  try {
    const favorites = getFavoritesService();
    yield put(Creators.getFavoritesSuccess(favorites || []));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* setFavorites({ payload }) {
  const { list } = yield select(({ favorites }) => favorites);
  try {
    const favorites = list ? [payload.book, ...list] : [payload.book];

    setFavoritesService(favorites);
    yield put(Creators.setFavorites(payload.book));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* deleteFavorites({ payload }) {
  const { list } = yield select(({ favorites }) => favorites);
  try {
    const favorites = list.filter(book => book.id !== payload.id);

    setFavoritesService(favorites);
    yield put(Creators.deleteFavorites(payload.id));
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* booksSaga() {
  yield all([
    takeLatest(Types.GET_FAVORITES, getFavorites),
    takeLatest(BookTypes.SET_FAVORITE, setFavorites),
    takeLatest(BookTypes.DELETE_FAVORITE, deleteFavorites),
  ]);
}
