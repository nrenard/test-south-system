import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import { requestBooks } from './api';
import parserBooks from '../../../helpers/parserBooks';

import { Creators, Types } from '../../ducks/books';

import { maxResults } from './constants';

export function* getBooks({ payload }) {
  const { giveMeMore } = payload;

  try {
    const {
      favorites: { list: listFavorites },
      books: { query: queryStore, pagination },
    } = yield select(store => store);

    let startIndex = 0;
    if (giveMeMore) startIndex = pagination.totalCaught + maxResults;

    const books = yield call(requestBooks, {
      query: queryStore,
      startIndex,
    });

    const total = books.totalItems;
    const hasMore = total > startIndex;

    yield put(
      Creators.getBooksSuccess({
        list: books.items
          ? books.items.map(item => (listFavorites && listFavorites.length
            ? parserBooks(item, listFavorites)
            : parserBooks(item)))
          : [],
        pagination: {
          total,
          totalCaught: startIndex,
          hasMore,
        },
        giveMeMore,
      }),
    );
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* booksSaga() {
  yield all([takeLatest(Types.GET_BOOKS, getBooks)]);
}
