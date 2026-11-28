// Read base URL from Vite environment variables (fallback if not defined)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

export interface HealthResponse {
  status: string;
  service?: string;
}

export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ApiError';
  }
}

/**
 * Common HTTP request handler with error handling
 */
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Network error: Unable to reach FastAPI backend server.');
  }
}

/**
 * Exported API service object for your application
 */
export const apiService = {
  getHealth: async (): Promise<HealthResponse> => {
    return request<HealthResponse>('/health');
  },
};