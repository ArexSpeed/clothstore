import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-row w-full h-full max-h-screen font-family overflow-hidden">
      <Sidebar />
      <div className="w-full overflow-y-scroll">
        <Navbar />
        <Main />
      </div>
      {/* Sidebar */}
      {/* Navbar */}
      {/* Hero */}
      {/* Main */}
    </div>
  );
}

export default App;
