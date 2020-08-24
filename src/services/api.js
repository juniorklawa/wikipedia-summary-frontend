import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wikipedia-summary-api.herokuapp.com',
});

export default api;