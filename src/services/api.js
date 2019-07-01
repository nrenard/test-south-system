import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  response => response.data,
  error => (error.response ? error.response.data : error),
);

export default api;
