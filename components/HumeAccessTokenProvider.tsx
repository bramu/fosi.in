"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface HumeAccessTokenContextType {
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

const HumeAccessTokenContext = createContext<HumeAccessTokenContextType | undefined>(undefined);

export const useHumeAccessToken = () => {
  const context = useContext(HumeAccessTokenContext);
  if (context === undefined) {
    throw new Error('useHumeAccessToken must be used within a HumeAccessTokenProvider');
  }
  return context;
};

interface HumeAccessTokenProviderProps {
  children: React.ReactNode;
}

export default function HumeAccessTokenProvider({ children }: HumeAccessTokenProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/api/hume/token');
        if (!response.ok) {
          throw new Error('Failed to fetch token');
        }
        const data = await response.json();
        setAccessToken(data.accessToken);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to get access token');
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading voice interface...</p>
        </div>
      </div>
    );
  }

  if (error || !accessToken) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Unable to Load Voice Interface
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error || 'Failed to get access token. Please try again later.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <HumeAccessTokenContext.Provider value={{ accessToken, loading, error }}>
      {children}
    </HumeAccessTokenContext.Provider>
  );
} 