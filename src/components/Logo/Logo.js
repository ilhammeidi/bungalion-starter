import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import logo from 'assets/images/logo-fintech.svg';
import brand from 'assets/text/brand';
import classes from './logo-style';

function Logo(props) {
  const { type, size } = props;
  return (
    <Box className="logo" sx={(theme) => ({
        ...classes[type],
        ...classes.logo(theme),
        ...classes[size]
      })}>
      <img src={logo} alt="logo" />
      { type !== 'only' ? brand.retail.name : '' }
    </Box>
  );
}

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string
};

Logo.defaultProps = {
  size: 'medium'
};

export default Logo;
