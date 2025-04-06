import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { API_URL } from "./env";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest<T = any>(
  options: {
    method: string;
    path: string;
    body?: any;
  }
): Promise<T> {
  const { method, path, body } = options;
  
  const url = path.startsWith('/api') ? `${API_URL}${path.substring(4)}` : path;
  
  const res = await fetch(url, {
    method,
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  // For JSON responses, even errors will return JSON that we should parse
  // This allows us to get detailed error messages from the API
  if (res.headers.get('content-type')?.includes('application/json')) {
    const jsonResponse = await res.json();
    
    // If response isn't successful, enhance the error with status code
    if (!res.ok) {
      // Add status code to the response for better error handling
      return { 
        ...jsonResponse, 
        success: false, 
        status: res.status 
      } as T;
    }
    
    return jsonResponse as T;
  }
  
  // For non-JSON responses, use the original error handling
  await throwIfResNotOk(res);
  return await res.json() as T;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const path = queryKey[0] as string;
    const url = path.startsWith('/api') ? `${API_URL}${path.substring(4)}` : path;
    
    const res = await fetch(url, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
