import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import user from 'api/user';
import classes from './sidebar-style';
import SidebarContent from './SidebarContent';

function SidebarList(props) {
  const {
    open,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    userAttr
  } = props;
  const [status, setStatus] = useState(user.status);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = newStatus => {
    setStatus(newStatus);
    handleClose();
  };

  return (
    <Fragment>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!open}
          anchor={leftSidebar ? 'left' : 'right'}
        >
          <Box className="swipeDrawerPaper" sx={classes.swipeDrawerPaper}>
            <SidebarContent
              drawerPaper
              leftSidebar={leftSidebar}
              toggleDrawerOpen={toggleDrawerOpen}
              loadTransition={loadTransition}
              status={status}
              anchorEl={anchorEl}
              openMenuStatus={handleOpen}
              closeMenuStatus={handleClose}
              changeStatus={handleChangeStatus}
              userAttr={userAttr}
            />
          </Box>
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          onClose={toggleDrawerOpen}
          className="drawerWrap"
          sx={{
            ...(open && classes.drawer),
            ...classes.drawerWrap
          }}
          open={open}
          anchor={leftSidebar ? 'left' : 'right'}
        >
          <SidebarContent
            drawerPaper={open}
            leftSidebar={leftSidebar}
            loadTransition={loadTransition}
            status={status}
            anchorEl={anchorEl}
            openMenuStatus={handleOpen}
            closeMenuStatus={handleClose}
            changeStatus={handleChangeStatus}
            userAttr={userAttr}
          />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

SidebarList.propTypes = {
  userAttr: PropTypes.object,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  open: PropTypes.bool,
  leftSidebar: PropTypes.bool,
};

SidebarList.defaultProps = {
  userAttr: {},
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  open: true,
  leftSidebar: true
};

export default SidebarList;
