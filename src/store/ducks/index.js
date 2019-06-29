import { combineReducers } from 'redux';

import books from './books';
import favorites from './favorites';

export default combineReducers({
  books,
  favorites,
});
