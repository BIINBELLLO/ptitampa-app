import axios from "axios"

// Create an instance of axios
const httpClient = axios.create({
  baseURL: 'https://ptitampa-app-production.up.railway.app', // Default base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Add a request interceptor
// httpClient.interceptors.request.use(
//   (config) => {
//     // You can add common headers here, like Authorization
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// httpClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle common errors like 401 Unauthorized
//     if (error.response.status === 401) {
//       // For example, redirect to login page
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default httpClient;
