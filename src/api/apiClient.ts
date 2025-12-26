import { authService } from '../auth/authService';

const API_BASE_URL = 'https://localhost:44305/api';

export async function apiCall(endpoint: string, options: RequestInit = {}) {
  const token = await authService.getAccessToken();
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}
