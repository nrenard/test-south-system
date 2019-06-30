export const Types = {
  GET_BOOKS: 'books/GET_BOOKS',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',

  SET_FAVORITE: 'books/SET_FAVORITE',
  DELETE_FAVORITE: 'books/DELETE_FAVORITE',

  SET_ERROR: 'books/SET_ERROR',
};

export const INITIAL_STATE = {
  list: null,
  loading: false,
  pagination: {
    totalCaught: 0,
    total: 0,
    hasMore: false,
  },
  query: null,
  error: null,
};

export const Creators = {
  getBooks: ({ query, giveMeMore = false }) => ({
    type: Types.GET_BOOKS,
    payload: { query, giveMeMore },
  }),
  getBooksSuccess: payload => ({
    type: Types.GET_BOOKS_SUCCESS,
    payload,
  }),
  setFavorite: book => ({
    type: Types.SET_FAVORITE,
    payload: { book },
  }),
  deleteFavorite: id => ({
    type: Types.DELETE_FAVORITE,
    payload: { id },
  }),
  setError: error => ({
    type: Types.SET_ERROR,
    payload: { error },
  }),
};

export default function books(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_BOOKS:
      return { ...state, loading: true, query: payload.query || state.query };

    case Types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        list: payload.giveMeMore ? [...state.list, ...payload.list] : payload.list,
        pagination: payload.pagination,
        loading: false,
        error: null,
      };

    case Types.SET_FAVORITE:
      return {
        ...state,
        list: state.list.map((book) => {
          if (book.id === payload.book.id) return payload.book;
          return book;
        }),
      };

    case Types.DELETE_FAVORITE:
      return {
        ...state,
        list: state.list
          ? state.list.map((book) => {
            if (book.id === payload.id) return { ...book, isFavorite: false };

            return book;
          })
          : null,
      };

    case Types.SET_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    default:
      return state;
  }
}
