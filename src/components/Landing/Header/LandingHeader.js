import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Logo from '../Logo';
import link from 'assets/text/link';
import MobileMenu from './MobileMenu';
import HeaderMenu from './Menu';
import UserMenu from '../../Header/Menu/UserMenu';
import classes from './landing-header-style';
import navMenu from 'api/menu/single';
import samplePages from 'api/menu/sample-pages';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function LandingHeader(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const { onToggleDark, onToggleDir, home } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3]),
  ]);
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

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        position="relative"
        id="header"
        sx={(theme) => ({
          ...classes.header,
          ...(openMenu && classes.noShadow)
        })}
        className={clsx(
          fixed && 'fixed',
          openDrawer && 'openDrawer'
        )}
      >
        <Container fixed={isDesktop}>
          <Box className="headerContent" sx={classes.headerContent}>
            <nav className="navMenu" sx={classes.navMenu}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  sx={classes.mobileMenu}
                  className={clsx('hamburger hamburger--spin', openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <Box component sx={classes.bar} className="hamburger-inner" />
                  </span>
                </IconButton>
              )}
              <Box className="logo" sx={classes.logo}>
                <a href={link.home}>
                  <Logo type="landscape" />
                </a>
              </Box>
              {isDesktop && (
                <Box className="mainMenu" sx={classes.mainMenu}>
                  <HeaderMenu
                    open={openMenu}
                    menuPrimary={menuList}
                    menuSecondary={samplePages}
                    toggle={handleToggle}
                    close={handleClose}
                    singleNav={home}
                  />
                </Box>
              )}
            </nav>
            <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
          </Box>
        </Container>
      </AppBar>
    </Fragment>
  );
}

LandingHeader.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  home: PropTypes.bool
};

LandingHeader.defaultProps = {
  home: false
};

export default LandingHeader;
