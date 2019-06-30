import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

api.interceptors.response.use(
  response => response.data,
  error => (error.response ? error.response.data : error),
);

export default api;
