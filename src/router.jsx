import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Router;
