import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import dataMenu from 'api/menu/sidebar';
import classes from './sidebar-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} />; // eslint-disable-line
});

// eslint-disable-next-line
function Menu(props) {
  const {
    openSubMenu,
    open,
    toggleDrawerOpen,
    loadTransition
  } = props;

  const handleClick = () => {
    toggleDrawerOpen();
    loadTransition(false);
  };

  const getMenus = menuArray => menuArray.map((item, index) => {
    if (item.child || item.linkParent) {
      return (
        <div key={index.toString()}>
          <ListItem
            button
            component={LinkBtn}
            to={item.linkParent ? item.linkParent : '#'}
            onClick={() => openSubMenu(item.key, item.keyParent)}
            sx={(theme) => ({
              ...classes.head(theme),
              ...(open.indexOf(item.key) > -1 && classes.opened)
            })}
            className={
              clsx(
                item.icon ? 'iconed' : '',
                open.indexOf(item.key) > -1 ? 'opened' : ''
              )
            }
          >
            {item.icon && (
              <ListItemIcon className="icon" sx={classes.icon}>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
            )}
            <ListItemText className="primary" sx={classes.primary} primary={item.name} />
            { !item.linkParent && (
              <span>
                { open.indexOf(item.key) > -1 ? <ExpandLess /> : <ExpandMore /> }
              </span>
            )}
          </ListItem>
          { !item.linkParent && (
            <Collapse
              component="div"
              className="nolist"
              sx={{
                ...classes.nolist,
                ...(item.keyParent && classes.child)
              }}
              in={open.indexOf(item.key) > -1}
              timeout="auto"
              unmountOnExit
            >
              <List className="dense" sx={classes.dense} component="nav" dense>
                { getMenus(item.child, 'key') }
              </List>
            </Collapse>
          )}
        </div>
      );
    }
    if (item.title) {
      return (
        <ListSubheader
          disableSticky
          key={index.toString()}
          component="div"
          sx={classes.title}
          className="title"
        >
          {item.name}
        </ListSubheader>
      );
    }
    return (
      <ListItem
        key={index.toString()}
        button
        exact="true"
        className="nested"
        sx={classes.nested}
        component={LinkBtn}
        to={item.link}
        onClick={() => handleClick()}
      >
        <ListItemText className="primary" sx={classes.primary} primary={item.name} />
        {item.badge && (
          <Chip color="primary" label={item.badge} className="badge" sx={classes.badge} />
        )}
      </ListItem>
    );
  });

  return (
    <div>
      {getMenus(dataMenu)}
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.array,
  openSubMenu: PropTypes.func,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
};

Menu.defaultProps = {
  open: ['apps'],
  openSubMenu: () => {},
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
};

export default Menu;
