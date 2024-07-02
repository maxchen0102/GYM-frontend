

import Board from './components/dashboard/dashboard';
import React from 'react';
import Login from './components/account/login';
import Logout from './components/account/logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category  from './components/category/category';
import ItemList from './components/items/itemList';


export default function Layout() {
    return (
      <Router>
      <div>

          <Routes>
            <Route path="/" element={<Board />}/>
          <Route path="/category" element={<Category />}/>
          <Route path="/category/:id" component={ItemList} />
        </Routes>
        </div>

      </Router>
  
    );
  }

