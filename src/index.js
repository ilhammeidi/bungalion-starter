import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeWrapper from './components/Templates/ThemeWrapper';
import './i18n';
import Store from './store';
import Main from './routes';

ReactDOM.render(
  <Store>
    <ThemeWrapper>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Main />
    </ThemeWrapper>
  </Store>,
  document.querySelector('#root'),
);
