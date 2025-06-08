import axios from 'axios';

const API_URL = 'https://assuredgig-backend.vercel.app';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
  }
);

export const signUp = async (userData: {
  email: string;
  password: string;
  fullName: string;
  role: 'freelancer' | 'client';
  profilePicture?: string;
  bio?: string;
  skills?: string[];
  hourlyRate?: number;
}) => {
  const response = await api.post('/api/auth/register', userData);
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await api.post('/api/auth/login', credentials);
  return response.data;
};

export default api; 