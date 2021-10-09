import Axios from 'axios';

const api = Axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL || 'https://www.seculomanaus.com.br/api/app',
});

api.interceptors.request.use(
  async (request) => {
    // const token = localStorage.getItem('accessToken');

    // if (token) request.headers.Authorization = `Bearer ${token}`;

    request.headers.Accept = 'application/json';
    // request.headers['Content-Type'] = `multipart/form-data`;

    return request;
  },
  (error) => Promise.reject(error),
);

export default api;
