export const Types = {
  GET_FAVORITES: 'favotires/GET_FAVORITES',
  GET_FAVORITES_SUCCESS: 'favotires/GET_FAVORITES_SUCCESS',

  SET_FAVORITES: 'favotires/SET_FAVORITES',

  DELETE_FAVORITE: 'favotires/DELETE_FAVORITE',
};

const INITIAL_STATE = {
  list: null,
};

export const Creators = {
  getFavorites: () => ({
    type: Types.GET_FAVORITES,
  }),
  getFavoritesSuccess: data => ({
    type: Types.GET_FAVORITES_SUCCESS,
    payload: { data },
  }),
  setFavorites: book => ({
    type: Types.SET_FAVORITES,
    payload: { book },
  }),
  deleteFavorites: id => ({
    type: Types.DELETE_FAVORITE,
    payload: { id },
  }),
};

export default function books(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        list: payload.data,
      };

    case Types.SET_FAVORITES:
      return {
        ...state,
        list: [...state.list, payload.book],
      };

    case Types.DELETE_FAVORITE:
      return {
        ...state,
        list: state.list.filter(favorite => favorite.id !== payload.id),
      };

    default:
      return state;
  }
}
