import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle unauthorized access
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

// Jobs API
export const jobsApi = {
  getJobs: async (params?: { status?: string; search?: string }) => {
    const response = await apiClient.get('/jobs', { params });
    return response.data;
  },

  getJob: async (id: string) => {
    const response = await apiClient.get(`/jobs/${id}`);
    return response.data;
  },

  createJob: async (data: unknown) => {
    const response = await apiClient.post('/jobs', data);
    return response.data;
  },

  updateJob: async (id: string, data: unknown) => {
    const response = await apiClient.put(`/jobs/${id}`, data);
    return response.data;
  },
};

// Applications API
export const applicationsApi = {
  getApplications: async (jobId?: string) => {
    const response = await apiClient.get('/applications', { params: { jobId } });
    return response.data;
  },

  createApplication: async (jobId: string, data: unknown) => {
    const response = await apiClient.post(`/jobs/${jobId}/apply`, data);
    return response.data;
  },

  updateApplication: async (id: string, data: unknown) => {
    const response = await apiClient.put(`/applications/${id}`, data);
    return response.data;
  },
};

// Contracts API
export const contractsApi = {
  getContracts: async () => {
    const response = await apiClient.get('/contracts');
    return response.data;
  },

  getContract: async (id: string) => {
    const response = await apiClient.get(`/contracts/${id}`);
    return response.data;
  },

  createContract: async (data: unknown) => {
    const response = await apiClient.post('/contracts', data);
    return response.data;
  },

  updateContract: async (id: string, data: unknown) => {
    const response = await apiClient.put(`/contracts/${id}`, data);
    return response.data;
  },
};

// Meetings API
export const meetingsApi = {
  getMeetings: async () => {
    const response = await apiClient.get('/meetings');
    return response.data;
  },

  createMeeting: async (data: unknown) => {
    const response = await apiClient.post('/meetings', data);
    return response.data;
  },

  updateMeeting: async (id: string, data: unknown) => {
    const response = await apiClient.put(`/meetings/${id}`, data);
    return response.data;
  },
};

// Work Progress API
export const workProgressApi = {
  getProgress: async (contractId: string) => {
    const response = await apiClient.get(`/contracts/${contractId}/progress`);
    return response.data;
  },

  updateProgress: async (contractId: string, data: unknown) => {
    const response = await apiClient.put(`/contracts/${contractId}/progress`, data);
    return response.data;
  },
};

// Portfolio API
export const portfolioApi = {
  getPortfolio: async (userId: string) => {
    const response = await apiClient.get(`/portfolio/${userId}`);
    return response.data;
  },

  updatePortfolio: async (data: unknown) => {
    const response = await apiClient.put('/portfolio', data);
    return response.data;
  },
};

// Dashboard API
export const dashboardApi = {
  getStats: async () => {
    const response = await apiClient.get('/dashboard/stats');
    return response.data;
  },

  getRecentActivity: async () => {
    const response = await apiClient.get('/dashboard/activity');
    return response.data;
  },
}; 