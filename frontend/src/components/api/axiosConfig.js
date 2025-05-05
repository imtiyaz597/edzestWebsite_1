import axios from 'axios';

const api = axios.create({
  baseURL: 'https://website-backend2.onrender.com/api', // 👈 use your backend URL
});

export default api;
