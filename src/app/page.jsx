import React from 'react';
import App from './App';
import Sidebar from './components/common/Sidebar';
const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-black flex items-center justify-center ">
      <Sidebar />
      <App />
    </div>
  );
};

export default Home;
