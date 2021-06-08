import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        Main
      </div>
      {/* Sidebar */}
      {/* Navbar */}
      {/* Hero */}
      {/* Main */}
    </div>
  );
}

export default App;
