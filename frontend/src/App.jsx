import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  console.log("App component rendering");
  return (
    <>
      <ToastContainer />
      <Outlet /> {/* This is crucial for nested routes to render */}
    </>
  );
};

export default App;