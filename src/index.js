import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DealershipPage from './DealershipPage/DealershipPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* Define the main route for the DealershipPage */}
      <Route path="/" element={<DealershipPage />} />
      {/* You can add more routes here if needed */}
    </Routes>
  </BrowserRouter>
);
