import { all, takeLatest, call, put } from "redux-saga/effects";

import { requestBooks } from "./api";

import { Creators as BookActions } from "../../ducks/books";
import { Types as TypesActions } from "../../ducks/books";

import { maxResults } from "./constants";

const parseItems = item => {
  const isSale = item.saleInfo.saleability !== "NOT_FOR_SALE";

  return {
    id: item.id,
    amount: isSale ? item.saleInfo.listPrice.amount : 0,
    title: item.volumeInfo.title,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    smallThumbnail: item.volumeInfo.imageLinks.smallThumbnail,
    previewLink: item.volumeInfo.previewLink,
    description: item.volumeInfo.description,
    publisher: item.volumeInfo.publisher,
    isSale
  };
};

export function* getBooks({ payload }) {
  const page = payload.page;
  const query = payload.query;
  const startIndex = maxResults * page - 1;

  try {
    const books = yield call(requestBooks, {
      query,
      startIndex: startIndex < 0 ? 0 : startIndex
    });

    yield put(
      BookActions.getBooksSuccess({
        list: books.items ? books.items.map(parseItems) : [],
        pagination: {
          pages: Math.floor(books.totalItems / maxResults),
          total: books.totalItems,
          page
        }
      })
    );
  } catch (err) {
    console.log("err: ", err);
  }
}

export default function* booksSaga() {
  yield all([takeLatest(TypesActions.GET_BOOKS, getBooks)]);
}
