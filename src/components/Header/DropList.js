import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Logo from '../Logo';
import link from 'assets/text/link';
import UserMenu from './Menu/UserMenu';
import classes from './header-style';
import multiple from 'api/menu/multiple';
import MultiLevel from './Menu/MultiLevelClick';
import MobileMenu from './MobileMenu/MultiMobile';

function Header(props) {
  const [fixed, setFixed] = useState(false);

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

  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        position="relative"
        id="header"
        sx={classes.header}
        className={clsx(
          fixed && 'fixed',
          openDrawer && 'openDrawer'
        )}
      >
        <Container fixed={isDesktop}>
          <Box className="headerContent" sx={classes.headerContent}>
            <Box component="nav" className="navMenu" sx={classes.navMenu}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  sx={classes.mobileMenu}
                  className={clsx('hamburger hamburger--spin', openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <Box component="span" sx={classes.bar} className="hamburger-inner" />
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
                  <MultiLevel dataMenu={multiple} />
                </Box>
              )}
            </Box>
            <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
          </Box>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default Header;
