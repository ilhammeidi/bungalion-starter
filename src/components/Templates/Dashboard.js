import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Context } from '../../store';

function CustomLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ color: match ? 'green' : 'grey' }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

function Application({ children }) {
  const [state, dispatch] = useContext(Context);

  return (
    <>
      <Header />
      <Box>
        <Sidebar />
      </Box>
      <Box sx={{ paddingTop: 20, display: 'none' }}>
        <Button variant={state.sidebar === 'list' ? 'contained' : 'outlined'} onClick={() => dispatch({ type: 'SET_SIDEBAR', payload: 'list' })}>
          sidebar list
        </Button>
        <Button variant={state.sidebar === 'big' ? 'contained' : 'outlined'} onClick={() => dispatch({ type: 'SET_SIDEBAR', payload: 'big' })}>
          sidebar big
        </Button>
        <Button variant={state.header === 'mega' ? 'contained' : 'outlined'} onClick={() => dispatch({ type: 'SET_HEADER', payload: 'mega' })}>
          header mega
        </Button>
        <Button variant={state.header === 'droplist' ? 'contained' : 'outlined'} onClick={() => dispatch({ type: 'SET_HEADER', payload: 'droplist' })}>
          header DropList
        </Button>
        <Button variant={state.header === 'basic' ? 'contained' : 'outlined'} onClick={() => dispatch({ type: 'SET_HEADER', payload: 'basic' })}>
          header basic
        </Button>
        <Box sx={{ bgcolor: 'primary.main' }}>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          &nbsp;
          <CustomLink to="/dashboard/v2">Dashboard v2</CustomLink>
          &nbsp;
          <Link to="/login">logout</Link>
          &nbsp;
          {children}
        </Box>
      </Box>
    </>
  );
}

Application.propTypes = {
  children: PropTypes.node.isRequired
};

export default Application;
