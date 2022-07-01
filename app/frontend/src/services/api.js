import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export const apiGet = (endpoint, options) => axios
  .get(`${BASE_URL}${endpoint}`, options);

export const apiGetById = (endpoint, id, options) => axios
  .get(`${BASE_URL}${endpoint}/${id}`, options);

export const apiPost = (endpoint, data, options) => axios
  .post(`${BASE_URL}${endpoint}`, data, options);

export const apiPut = (endpoint, id, data, options) => axios
  .put(`${BASE_URL}${endpoint}/${id}`, data, options);

export const apiDelete = (endpoint, id, options) => axios
  .delete(`${BASE_URL}${endpoint}/${id}`, options);
