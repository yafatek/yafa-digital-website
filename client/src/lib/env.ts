/**
 * Access to environment variables in the frontend
 * 
 * All environment variables are prefixed with VITE_ to be exposed to the client
 */

/**
 * The base URL for API requests
 */
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Environment mode (development, production, etc.)
 */
export const NODE_ENV = import.meta.env.MODE; 