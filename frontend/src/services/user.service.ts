import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

export const getPublicContent = () => axios.get(`${API_URL }all`);

export const getUserBoard = () => axios.get(`${API_URL }user`, { headers: authHeader() });

export const getModeratorBoard = () => axios.get(`${API_URL }mod`, { headers: authHeader() });

export const getAdminBoard = () => axios.get(`${API_URL }admin`, { headers: authHeader() });
