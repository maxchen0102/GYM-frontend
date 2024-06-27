

import Dashboard from './components/dashboard/dashboard';
import React from 'react';
import Login from './components/account/login';
import Logout from './components/account/logout';

export default function Layout() {
    return (
      <div>
        <Dashboard />
        <Login />
      </div>
    );
  }

