import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-16 md:pt-0 md:ml-80 relative z-0">
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout; 