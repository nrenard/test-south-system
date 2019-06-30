import favoritesReducer, {
  Creators as FavoritesActions,
  INITIAL_STATE,
} from '../../store/ducks/favorites';

const mockBook = {
  amount: 'R$ 60,00',
  buyLink:
    'https://play.google.com/store/books/details?id=ff6ZDwAAQBAJ&rdid=book-ff6ZDwAAQBAJ&rdot=1&source=gbs_api',
  description: '',
  id: 'ff6ZDwAAQBAJ',
  isFavorite: true,
  isSale: true,
  publisher: 'Novatec Editora',
  smallThumbnail:
    'http://books.google.com/books/content?id=ff6ZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  title: 'Primeiros passos com React',
};

describe('Favorites Reducers', () => {
  it('should be able to get favorites success', () => {
    const state = favoritesReducer(INITIAL_STATE, FavoritesActions.getFavoritesSuccess([mockBook]));
    expect(state.list[0]).toBe(mockBook);
  });

  it('should be able to set favorite', () => {
    const state = favoritesReducer({ list: [] }, FavoritesActions.setFavorites(mockBook));
    expect(state.list[0]).toBe(mockBook);
  });

  it('should be able to delete favorite', () => {
    const setFavorite = favoritesReducer({ list: [] }, FavoritesActions.setFavorites(mockBook));
    const state = favoritesReducer(setFavorite, FavoritesActions.deleteFavorites(mockBook.id));

    expect(state.list[0]).toBe(undefined);
  });
});
