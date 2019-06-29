export const Types = {
  GET_BOOKS: 'books/GET_BOOKS',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',

  DELETE_USER: 'books/DELETE_USER',
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

    default:
      return state;
  }
}
