import api from '../../../services/api';

import { maxResults } from './constants';

export const requestBooks = async ({ query, startIndex = 0 }) => {
  try {
    const data = await api.get(`?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`);
    return data;
  } catch (err) {
    return err;
  }
};
