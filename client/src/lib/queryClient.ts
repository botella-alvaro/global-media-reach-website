import { QueryClient } from '@tanstack/react-query';

// Define the query function with the correct type
const defaultQueryFn = async ({ queryKey }: any) => {
  if (typeof queryKey[0] !== 'string') {
    throw new Error('Invalid query key');
  }
  
  const url = queryKey[0];
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // @ts-ignore - We're having TypeScript issues with the QueryClient types
      queryFn: defaultQueryFn,
    },
  },
});

export async function apiRequest(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    throw error;
  }

  return response.json();
}