import axios from 'axios';

const api = axios.create({
  baseURL: 'http://consulta.iconexlog.com.br',
});

export default api;
