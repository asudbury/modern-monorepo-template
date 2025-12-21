import React from 'react';

export function NotFound() {
  return (
    <div role="alert" aria-live="assertive">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => window.location.href = '/'}>Go Home</button>
    </div>
  );
}
