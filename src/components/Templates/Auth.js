import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Auth({ children }) {
  return (
    <div>
      <h1>Users</h1>
      <Link to="/dashboard">masuk</Link>
      &nbsp;
      <Link to="/register">register</Link>
      &nbsp;
      {children}
    </div>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired
};

export default Auth;
