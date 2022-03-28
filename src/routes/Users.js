import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthTemplate from '../components/Templates/Auth';

function Users() {
  return (
    <AuthTemplate>
      <Outlet />
    </AuthTemplate>
  );
}

export default Users;
