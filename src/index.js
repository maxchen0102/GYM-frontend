import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
import './index.css';
import axios from 'axios';

// 设置 Axios 的全局配置
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Layout />
    </div>
   
  </React.StrictMode>
);


