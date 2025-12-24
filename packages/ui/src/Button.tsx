import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: '0.5rem 1rem',
      borderRadius: 4,
      border: '1px solid #ccc',
      background: '#fff',
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);
