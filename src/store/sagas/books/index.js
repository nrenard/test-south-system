import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { requestBooks } from './api';
import { parseBooks } from '../../../helpers/parsers';

import { Creators as BookActions, Types as TypesActions } from '../../ducks/books';

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

    yield put(
      BookActions.getBooksSuccess({
        list: books.items ? books.items.map(parseBooks) : [],
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
  yield all([takeLatest(TypesActions.GET_BOOKS, getBooks)]);
}
