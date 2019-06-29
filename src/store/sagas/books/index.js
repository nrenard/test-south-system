import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import { requestBooks } from './api';
import { parseBooks } from '../../../helpers/parsers';

import { Creators, Types } from '../../ducks/books';

import { maxResults } from './constants';

export function* getBooks({ payload }) {
  const { page } = payload;
  const startIndex = maxResults * page;

  try {
    const {
      favorites: { list },
      books: { query: queryStore },
    } = yield select(store => store);

    const books = yield call(requestBooks, {
      query: queryStore,
      startIndex: startIndex < 0 ? 0 : startIndex,
    });

    const total = books.totalItems;
    console.log('total: ', total);
    console.log('maxResults: ', maxResults);
    console.log('total / maxResults: ', total / maxResults);
    yield put(
      Creators.getBooksSuccess({
        list: books.items
          ? books.items.map(item => (list && list.length ? parseBooks(item, list) : parseBooks(item)))
          : [],
        pagination: {
          pages: Math.floor(total / maxResults),
          total,
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
