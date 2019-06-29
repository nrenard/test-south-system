import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import { requestBooks } from './api';
import { parseBooks } from '../../../helpers/parsers';

import { Creators, Types } from '../../ducks/books';

import { maxResults } from './constants';

export function* getBooks({ payload }) {
  const { page } = payload;
  const { query } = payload;
  const startIndex = maxResults * page - 1;

  try {
    const books = yield call(requestBooks, {
      query,
      startIndex: startIndex < 0 ? 0 : startIndex,
    });

    const {
      favorites: { list },
    } = yield select(store => store);

    yield put(
      Creators.getBooksSuccess({
        list: books.items
          ? books.items.map(item => (list && list.length ? parseBooks(item, list) : parseBooks(item)))
          : [],
        pagination: {
          pages: Math.floor(books.totalItems / maxResults),
          total: books.totalItems,
          page,
        },
      }),
    );
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* booksSaga() {
  yield all([takeLatest(Types.GET_BOOKS, getBooks)]);
}
