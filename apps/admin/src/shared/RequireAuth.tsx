import React from 'react';

export const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Example: Replace with real auth logic
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <div role="alert">You must be logged in to access this page.</div>;
  }
  return <>{children}</>;
};
