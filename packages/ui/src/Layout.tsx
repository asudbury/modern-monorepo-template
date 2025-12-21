import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>{children}</div>
);
