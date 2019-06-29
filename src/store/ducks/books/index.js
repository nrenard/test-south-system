export const Types = {
  GET_BOOKS: 'books/GET_BOOKS',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',

  SET_FAVORITE: 'books/SET_FAVORITE',
  DELETE_FAVORITE: 'books/DELETE_FAVORITE',
};

const INITIAL_STATE = {
  list: null,
  loading: false,
  pagination: {
    pages: 0,
    total: 0,
    page: 0,
  },
};

export const Creators = {
  getBooks: (query, page = 0) => ({
    type: Types.GET_BOOKS,
    payload: { page, query },
  }),
  getBooksSuccess: data => ({
    type: Types.GET_BOOKS_SUCCESS,
    payload: { data },
  }),
  setFavorite: book => ({
    type: Types.SET_FAVORITE,
    payload: { book },
  }),
  deleteFavorite: id => ({
    type: Types.DELETE_FAVORITE,
    payload: { id },
  }),
};

export default function books(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_BOOKS:
      return { ...state, loading: true };

    case Types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        list: payload.data.list,
        pagination: payload.data.pagination,
        loading: false,
      };

    case Types.SET_FAVORITE:
      return {
        ...state,
        list: state.list.map((book) => {
          if (book.id === payload.book.id) {
            book.isFavorite = true;
            return book;
          }

          return book;
        }),
      };

    case Types.DELETE_FAVORITE:
      return {
        ...state,
        list: state.list
          ? state.list.map((book) => {
            if (book.id === payload.id) {
              book.isFavorite = false;
              return book;
            }

            return book;
          })
          : null,
      };

    default:
      return state;
  }
}
