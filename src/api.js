import axios from 'axios';

const api = axios.create({
  baseURL: 'https://profile.autumnpage.com/',
  timeout: 1000
});

export const getPortfolios = () => api.get('portfolios');

export const getWorkPortfolios = () => api.get('workportfolios');

export const getPersonalProjects = () => api.get('personalprojects');
