import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Edit from './pages/home/components/Edit';
import Item from './pages/home/components/Item';
import List from './pages/home/components/List';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home /> 
  </React.StrictMode>
);


