import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Logo from '../Logo';
import link from 'assets/text/link';
import SearchField from './SearchField';
import Settings from '../../Header/Menu/Settings';
import useStyles from './blog-header-style';
import blogMenu from 'api/menu/blog';
import MultiLevelMenu from './Menu';
import MobileMenu from './MobileMenu';

function BlogHeader(props) {
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

  const classes = useStyles();
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
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                <a href={link.home}>
                  <Logo type="landscape" />
                </a>
              </div>
              {isDesktop && (
                <div className={classes.mainMenu}>
                  <MultiLevelMenu dataMenu={blogMenu} />
                </div>
              )}
            </nav>
            <nav>
              <Hidden xsDown>
                <SearchField short />
              </Hidden>
              { isDesktop && <span className={classes.vDivider} /> }
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </nav>
          </div>
          <Hidden smUp>
            <SearchField />
          </Hidden>
        </Container>
      </AppBar>
    </Fragment>
  );
}

BlogHeader.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default BlogHeader;
