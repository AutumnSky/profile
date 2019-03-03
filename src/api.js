import axios from 'axios';

const api = axios.create({
  baseURL: 'http://profile.autumnpage.com/',
  timeout: 1000
});

export const portfolio = () => api.get('portfolio');
