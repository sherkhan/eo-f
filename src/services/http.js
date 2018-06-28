import axios from 'axios';

const instance = axios.create({
  baseURL: '/data/',
  headers: {'X-Custom-Header': 'foobar'}
});
