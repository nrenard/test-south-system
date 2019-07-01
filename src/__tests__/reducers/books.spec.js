import booksReducer, { Creators as BooksActions, INITIAL_STATE } from '../../store/ducks/books';

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

describe('Books Reducers', () => {
  it('should be able to get books', () => {
    const state = booksReducer(INITIAL_STATE, BooksActions.getBooks('react'));
    expect(state.loading).toBe(true);
  });

  it('shoul be able to get books sucess', () => {
    const state = booksReducer(
      INITIAL_STATE,
      BooksActions.getBooksSuccess({
        list: [mockBook],
        pagination: {},
        giveMeMore: false,
      }),
    );
    expect(JSON.stringify(state.list)).toBe(JSON.stringify([mockBook]));
  });

  it('shoul be able to set favorite', () => {
    const setBook = booksReducer(
      INITIAL_STATE,
      BooksActions.getBooksSuccess({
        list: [mockBook],
        pagination: {},
        giveMeMore: false,
      }),
    );

    const setFavorite = booksReducer(setBook, BooksActions.setFavorite(mockBook));

    expect(setFavorite.list.find(book => book.id === mockBook.id).isFavorite).toBe(true);
  });

  it('it shoul be able to delete favorite', () => {
    const setBook = booksReducer(
      INITIAL_STATE,
      BooksActions.getBooksSuccess({
        list: [mockBook],
        pagination: {},
        giveMeMore: false,
      }),
    );

    const deleteFavorite = booksReducer(setBook, BooksActions.deleteFavorite(mockBook.id));

    expect(deleteFavorite.list.find(book => book.id === mockBook.id).isFavorite).toBe(false);
  });

  it('it shoul be able to error book', () => {
    const textError = 'Ocorreu um erro.';

    const state = booksReducer(INITIAL_STATE, BooksActions.setError(textError));

    expect(state.error).toBe(textError);
  });
});
