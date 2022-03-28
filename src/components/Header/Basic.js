import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Logo from '../Logo';
import link from 'assets/text/link';
import Settings from './Menu/Settings';
import classes from './header-style';

function Basic(props) {
  const [fixed, setFixed] = useState(false);
  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const {
    onToggleDark,
    onToggleDir,
    text,
    href
  } = props;
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
      <AppBar
        position="relative"
        id="header"
        sx={classes.header}
        className={clsx('header', fixed ? 'fixed' : '')}
      >
        <Container fixed={isDesktop}>
          <Box className="headerContent" sx={classes.headerContent}>
            <Box component="nav" className="navMenu" sx={(theme) => ({ ...classes.navMenu(theme), flex: 1 })}>
              <Box sx={classes.logo} className="logo">
                <a href={link.home}>
                  <Logo type="landscape" size={isMobile ? 'small' : 'medium'} />
                </a>
              </Box>
            </Box>
            <Box component="nav" className="useMenu" sx={classes.userMenu}>
              <Button sx={classes.current} href={href} color="primary" variant="contained">{text}</Button>
              { isDesktop && <Box component="span" className="vDivider" sx={classes.vDivider} /> }
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Basic.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  href: PropTypes.string,
  text: PropTypes.string
};

Basic.defaultProps = {
  href: '/',
  text: 'login'
};

export default Basic;
