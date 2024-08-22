const { default: axios } = require("axios");

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
