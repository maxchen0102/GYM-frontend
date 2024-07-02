

import Board from './components/dashboard/dashboard';
import React from 'react';
import Login from './components/account/login';
import Logout from './components/account/logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category  from './components/category/category';
import ItemList from './components/items/itemList';
import RecordList from './components/records/recordList'; // 新增這行


export default function Layout() {
    return (
      <Router>
      <div>
          <Routes>
            <Route path="/" element={<Board />}/>
          <Route path="/category" element={<Category />}/>
          <Route path="/category/:id" element={<ItemList/> } />
          <Route path="/item/:itemId" element={<RecordList />} /> {/* 新增這行 */}
          
        </Routes>
        </div>

      </Router>
  
    );
  }

