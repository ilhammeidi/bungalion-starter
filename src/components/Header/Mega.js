import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Logo from '../Logo';
import link from 'assets/text/link';
import MobileMenu from './MobileMenu/MegaMobile';
import HeaderMenu from './Menu/MegaMenu';
import UserMenu from './Menu/UserMenu';
import classes from './header-style';
import mega from 'api/menu/mega';

function Mega(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  const handleToggle = (id) => {
    if (openMenu[id] !== undefined) {
      setOpenMenu({
        ...openMenu,
        [id]: !openMenu[id],
      });
      setShowMenu(currentShowMenu => !currentShowMenu);
      setTimeout(() => {
        setOpenMenu({ [id]: !openMenu[id] });
      }, 100);
    } else {
      setOpenMenu({
        ...openMenu,
        [id]: true
      });
      setShowMenu(true);
      setTimeout(() => {
        setOpenMenu({ [id]: true });
      }, 100);
    }
  };

  const handleClose = () => {
    setOpenMenu({});
    setShowMenu(false);
  };

  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        position="relative"
        id="header"
        className={clsx(fixed ? 'fixed' : '', openDrawer ? 'openDrawer' : '')}
        sx={(theme) => ({
          ...classes.header(theme),
          ...(showMenu && classes.noShadow),
        })}
      >
        <Container fixed={isDesktop}>
          <Box sx={classes.headerContent}>
            <Box component="nav" sx={classes.navMenu}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  sx={classes.mobileMenu}
                  className={clsx('hamburger hamburger--spin', openDrawer && 'is-active')}
                >
                  <Box component="span" sx="hamburger-box">
                    <Box component="span"  sx={classes.bar} className={clsx('bar', 'hamburger-inner')} />
                  </Box>
                </IconButton>
              )}
              <div sx={classes.logo}>
                <a href={link.home}>
                  <Logo type="landscape" />
                </a>
              </div>
              {isDesktop && (
                <ClickAwayListener onClickAway={handleClose}>
                  <Box sx={classes.mainMenu}>
                    <HeaderMenu
                      open={openMenu}
                      dataMenu={mega}
                      toggle={handleToggle}
                    />
                  </Box>
                </ClickAwayListener>
              )}
            </Box>
            <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
          </Box>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Mega.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default Mega;
