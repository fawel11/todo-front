import Form from 'vform';
import axios from 'axios';

const config = require('../../config');

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? config.build.baseUrl
      : config.dev.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to dynamically set the Authorization header with the latest token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

window.Form = Form;
Form.axios = instance;
window.axios = instance;
