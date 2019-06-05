import axios from "axios";
import portfolioData from "Data/portfolios.json";
import personalProjectData from "Data/personalprojects.json";
import workPortfolioData from "Data/workportfolios.json";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_URL,
  timeout: 3000
});

export const helloWorld = () => api.get("/");

// portfolio ------------------------
export const getPortfolios = () =>
  api
    .get("portfolios")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return { data: portfolioData };
    });

export const getPortfolioById = id =>
  api
    .get("portfolio")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      const portfolio = portfolioData.filter(
        portfolio => portfolio._id === id
      )[0];
      return { data: portfolio };
    });

// work portfolio ------------------------
export const getWorkPortfolios = () =>
  api
    .get("workportfolios")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return { data: workPortfolioData };
    });

export const getWorkPortfolioById = id =>
  api
    .get("workportfolio")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      const portfolio = workPortfolioData.filter(
        portfolio => portfolio._id === id
      )[0];
      return { data: portfolio };
    });

// personal portfolio ------------------------
export const getPersonalProjects = () =>
  api
    .get("personalprojects")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return { data: personalProjectData };
    });

export const getPersonalProjectById = id =>
  api
    .get("personalproject")
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      const portfolio = personalProjectData.filter(
        portfolio => portfolio._id === id
      )[0];
      return { data: portfolio };
    });
