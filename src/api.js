import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_URL,
  timeout: 1000
});

export const getPortfolios = () => api.get('portfolios');

export const getWorkPortfolios = () => api.get('workportfolios');
export const getWorkPortfolioById = (id) => api.get(`workportfolio/${id}`);

export const getPersonalProjects = () => api.get('personalprojects');
