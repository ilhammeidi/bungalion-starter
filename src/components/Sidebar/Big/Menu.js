import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ButtonBase from '@mui/material/ButtonBase';
import Icon from '@mui/material/Icon';
import { useTranslation } from 'react-i18next';
import dataMenu from 'api/menu/sidebar'
import MenuProfile from './MenuProfile';
import classes from './sidebar-big-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} />; // eslint-disable-line
});

function MenuBig(props) { // eslint-disable-line
  const { t } = useTranslation();
  const {
    open,
    drawerPaper,
    userAttr,
    closeDrawer,
    openDrawer,
    openSubMenu,
    mobile,
    loadTransition,
    toggleDrawerOpen
  } = props;
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [menuLoaded, setMenuLoaded] = useState(true);

  const handleLoadMenu = (menu, key) => {
    setSelectedMenu(menu);
    setMenuLoaded(false);
    openSubMenu(key);
    setTimeout(() => {
      setMenuLoaded(true); // load transtion menu
    }, 100);
    // Unecessary in mobile, because toggle menu already handled
    if (!mobile) {
      openDrawer();
    }
  };

  const handleLoadPage = () => {
    toggleDrawerOpen();
    loadTransition(false);
  };

  const currentMenu = dataMenu.filter(item => item.key === open[0]);
  const activeMenu = (key, child) => {
    if (selectedMenu.length < 1) {
      if (open.indexOf(key) > -1) {
        return true;
      }
      return false;
    }
    if (child === selectedMenu) {
      return true;
    }
    return false;
  };

  const getMenus = menuArray => menuArray.map((item, index) => {
    if (item.key === 'menu_levels') {
      return false;
    }
    if (item.child) {
      return (
        <ButtonBase
          key={index.toString()}
          focusRipple
          onClick={() => handleLoadMenu(item.child, item.key)}
          sx={classes.menuHead}
          className={clsx('menuHead', activeMenu(item.key, item.child) ? classes.active : '')}
        >
          <Icon className="icon" sx={classes.icon}>{item.icon}</Icon>
          <Box component="span" className="text" sx={classes.text}>
            {t(item.name)}
          </Box>
        </ButtonBase>
      );
    }
    return (
      <ButtonBase
        key={index.toString()}
        focusRipple
        sx={classes.menuHead}
        className={clsx('menuHead', open.indexOf(item.key) > -1 ? 'active' : '')}
        component={LinkBtn}
        to={item.linkParent}
        onClick={closeDrawer}
      >
        <Icon className="icon" sx={classes.icon}>{item.icon}</Icon>
        <Box component="span" className="text" sx={classes.text}>
          {t(item.name)}
        </Box>
      </ButtonBase>
    );
  });

  const getChildMenu = menuArray => menuArray.map((item, index) => {
    if (item.title) {
      return (
        <ListSubheader
          key={index.toString()}
          disableSticky
          className="title"
          sx={classes.title}
        >
          {t(item.name)}
        </ListSubheader>
      );
    }
    return (
      <ListItem
        key={index.toString()}
        button
        exact="true"
        className="item"
        sx={classes.item}
        component={LinkBtn}
        to={item.link}
        onClick={() => handleLoadPage()}
      >
        <ListItemIcon>
          <Icon className="icon" sx={classes.icon}>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText
          sx={classes.text}
          className="text"
          primary={t(item.name)}
        />
      </ListItem>
    );
  });

  const renderChildMenu = () => {
    if (selectedMenu.length < 1) {
      return (
        <List dense className="fixedWrap" sx={classes.fixedWrap}>
          {currentMenu.length > 0 ? getChildMenu(currentMenu[0].child) : ''}
        </List>
      );
    }
    return (
      <List
        dense
        className="fixedWrap"
        sx={(theme) => ({
          ...classes.fixedWrap(theme),
          ...classes.childMenuWrap,
          ...(menuLoaded && classes.menuLoaded)
        })}
      >
        {getChildMenu(selectedMenu)}
      </List>
    );
  };

  return (
    <Box component="aside" className="bigSidebar" sx={classes.bigSidebar}>
      <Box component="nav" className="category" sx={classes.category}>
        <Box className="fixedWrap" xs={classes.fixedWrap}>
          <MenuProfile userAttr={userAttr} />
          {getMenus(dataMenu)}
        </Box>
      </Box>
      <Box
        component="nav"
        className="listMenu"
        sx={{
          ...classes.listMenu,
          ...(!drawerPaper && classes.drawerPaperClose)
        }}
      >
        {renderChildMenu()}
      </Box>
    </Box>
  );
}

MenuBig.propTypes = {
  userAttr: PropTypes.object,
  open: PropTypes.array,
  openDrawer: PropTypes.func,
  openSubMenu: PropTypes.func,
  closeDrawer: PropTypes.func,
  loadTransition: PropTypes.func,
  drawerPaper: PropTypes.bool,
  mobile: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
};

MenuBig.defaultProps = {
  userAttr: {},
  open: ['apps'],
  openDrawer: () => {},
  openSubMenu: () => {},
  closeDrawer: () => {},
  loadTransition: () => {},
  drawerPaper: () => {},
  mobile: false,
  toggleDrawerOpen: () => {},
};

export default MenuBig;
