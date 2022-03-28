import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import CacheProvider from './CacheProvider';
import appTheme from '../../theme/appTheme';
import uiState, { reducer } from '../../theme/config';

export default function ThemeWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, uiState);
  const [checked, setChecked] = useState(state.theme === 'dark');
  const [checkedDir, setCheckedDir] = useState(state.direction === 'rtl');

  const handleChangeMode = (event) => {
    setChecked(event.target.checked);
    dispatch({ type: 'SET_THEME', payload: checked ? 'light' : 'dark' });
    // Push to local storage
    localStorage.setItem('bungalionTheme', state.theme === 'light' ? 'dark' : 'light');
  };

  const handleChangeDir = (event) => {
    setCheckedDir(event.target.checked);
    dispatch({ type: 'SET_DIRECTION', payload: checkedDir ? 'ltr' : 'rtl' });
  };

  return (
    <CacheProvider rtl={state.direction === 'rtl'}>
      <div dir={state.direction}>
        <ThemeProvider theme={appTheme(state.theme, state.color, state.direction)}>
          <Box sx={{ display: 'none' }}>
            <Box sx={{ pl: 10 }}>
              Light
              <Switch
                sx={{ transform: (theme) => (theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)') }}
                checked={checked}
                onChange={handleChangeMode}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              Dark
            </Box>
            <br />
            <hr />
            <Box sx={{ pl: 10 }}>
              LTR
              <Switch
                sx={{ transform: (theme) => (theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)') }}
                checked={checkedDir}
                onChange={handleChangeDir}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              RTL
            </Box>
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'SET_COLOR', payload: 'oceanBlue' })}>oceanBlue</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'SET_COLOR', payload: 'money' })}>money</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'SET_COLOR', payload: 'rose' })}>rose</Button>
          </Box>
          {children}
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
