import React from 'react';

export const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <aside style={{ width: 220, background: '#f4f4f4', padding: 24 }}>
      <h2>Admin</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav>
    </aside>
    <main style={{ flex: 1, padding: 24 }}>{children}</main>
  </div>
);
