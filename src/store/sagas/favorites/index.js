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

export function* setFavorites({ payload: { book } }) {
  const favoritesStore = select(({ favorites }) => favorites);
  console.log('favoritesStore: ', favoritesStore);
  // try {
  //   setFavoritesService();
  //   yield put(Creators.getFavoritesSuccess(favoritesStore || []));
  // } catch (err) {
  //   console.log('err: ', err);
  // }
}

export default function* booksSaga() {
  yield all([
    takeLatest(Types.GET_FAVORITES, getFavorites),
    takeLatest(BookTypes.SET_FAVORITE, setFavorites),
  ]);
}
