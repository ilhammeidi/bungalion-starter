import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import classes from './sidebar-big-style';
import dataMenu from 'api/menu/sidebar';
import MainMenuBig from './Menu';

function SidebarBig(props) {
  const {
    loadTransition,
    open,
    userAttr,
    toggleDrawerOpen,
  } = props;

  return (
    <Fragment>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!open}
          anchor="left"
        >
          <div className="swipeDrawerPaper" sx={classes.swipeDrawerPaper}>
            <MainMenuBig
              dataMenu={dataMenu}
              loadTransition={loadTransition}
              drawerPaper
              userAttr={userAttr}
              toggleDrawerOpen={toggleDrawerOpen}
              mobile
            />
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown>
        <div>
          <MainMenuBig
            dataMenu={dataMenu}
            loadTransition={loadTransition}
            drawerPaper={open}
            userAttr={userAttr}
          />
        </div>
      </Hidden>
    </Fragment>
  );
}

SidebarBig.propTypes = {
  loadTransition: PropTypes.func,
  toggleDrawerOpen: PropTypes.func,
  open: PropTypes.bool,
  userAttr: PropTypes.object,
};

SidebarBig.defaultProps = {
  loadTransition: () => {},
  toggleDrawerOpen: () => {},
  open: true,
  userAttr: {},
};

export default SidebarBig;
