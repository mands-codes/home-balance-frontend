import axios from 'axios'
import { config } from '../configs/config.js'

export const api = axios.create({
  baseURL: config.apiUrl
})

api.interceptors.request.use((reqConfig) => {
  const token = localStorage.getItem('token')
  if (token) {
    reqConfig.headers.Authorization = `Bearer ${token}`
  }
  return reqConfig
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const authApi = axios.create({
  baseURL: config.authUrl
});

export default api
