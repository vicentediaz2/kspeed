import React from 'react';
import App from './App';
import Sidebar from './components/common/Sidebar';
const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-black dark:bg-white flex items-center justify-center ">
      <Sidebar />
    </div>
  );
};

export default Home;
