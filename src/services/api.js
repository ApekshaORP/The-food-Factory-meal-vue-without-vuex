import axios from 'axios';

const baseURL = 'https://www.themealdb.com/api/json/v1/1';
// creating axios global instance
const clientApi = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
// handling globally response data after response recieve
clientApi.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default clientApi;
