import React from 'react';

export const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', marginBottom: 12 }}
  />
);

export const FormLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label style={{ display: 'block', marginBottom: 4 }}>{children}</label>
);
