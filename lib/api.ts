import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProjects = () => api.get('/projects/');
export const getSkills = () => api.get('/skills/');
export const getExperience = () => api.get('/experience/');
export const getCertifications = () => api.get('/certifications/');
export const getSocialLinks = () => api.get('/social/');

export default api;
