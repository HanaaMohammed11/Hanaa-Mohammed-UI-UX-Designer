import { QueryClient } from '@tanstack/react-query';

export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
    
        if (error?.status === 405 || error?.message?.includes('analytics')) {
          return false;
        }
        return failureCount < 1;
      },
    },
  },
});