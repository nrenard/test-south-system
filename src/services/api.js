import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  timeout: 2000
});

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => error.response.data
);

export default api;
