import React, {
  useState,
  useEffect,
  useRef,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classes from '../header-style';

function MultiLevelHover(props) {
  const { dataMenu } = props;

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');

  // Parent state
  const [open, setOpen] = useState(false);
  const [menuName, setName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  // Child state
  const [menuChild, setMenuChild] = useState({});
  const [anchorChild, setAnchorChild] = useState({});

  // Parent function
  const handleToggle = (event, name) => {
    setOpen((newOpen) => !newOpen);
    setName(name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setName('');
    setOpen(false);
    setMenuChild({});
    setAnchorChild({});
  };

  // Child function
  const handleToggleChild = (event, parent, id) => {
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      if (parent.child[i].id !== id) {
        menuClose = {
          ...menuClose,
          [parent.child[i].id]: false
        };
        anchorClose = {
          ...anchorClose,
          [parent.child[i].id]: null
        };
      }
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
      [id]: true
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
      [id]: event.currentTarget
    });
  };

  const handleCloseChild = (event, parent) => {
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      menuClose = {
        ...menuClose,
        [parent.child[i].id]: false
      };
      anchorClose = {
        ...anchorClose,
        [parent.child[i].id]: null
      };
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
    });
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
  }, [open]);

  const childMenu = (menu, item, anchor) => (
    <Popper
      anchorEl={anchor[item.id] || null}
      open={menu[item.id] || false}
      placement="right-start"
      transition
      disablePortal={false}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center top' }}
        >
          <Box sx={classes.multiMenuRoot}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow">
                  {item.child.map((subitem, index) => {
                    if (subitem.child) {
                      return (
                        <MenuItem
                          key={index.toString()}
                          onClick={handleClose}
                          onMouseEnter={(e) => handleToggleChild(e, item, subitem.id)}
                        >
                          <ListItemText primary={subitem.name} />
                          { childMenu(menuChild, subitem, anchorChild) }
                          <ChevronRightIcon fontSize="small" />
                        </MenuItem>
                      );
                    }
                    return (
                      <MenuItem
                        key={index.toString()}
                        onMouseEnter={(e) => handleCloseChild(e, item)}
                        onClick={handleClose}
                        className="menuList"
                        sx={{
                          ...classes.menuList,
                          ...(curURL === curOrigin + subitem.link && classes.current)
                        }}
                      >
                        <ListItem disableGutters disableRipple sx={classes.link} className="link" button component="a" href={subitem.link}>
                          <ListItemText primary={subitem.name} />
                        </ListItem>
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Box component="ul" sx={classes.multiMenu} className="multiMenu">
      <>
        {dataMenu.map((item, index) => (
          <Fragment key={index.toString()}>
            {item.child ? (
              <li
                onMouseEnter={(e) => handleToggle(e, item.name)}
                onMouseLeave={(e) => handleClose(e)}
                ref={anchorRef}
              >
                <div>
                  <Button endIcon={<Icon>expand_more</Icon>}>{item.name}</Button>
                  <Popper
                    open={menuName === item.name}
                    anchorEl={anchorEl || null}
                    placement="bottom-start"
                    role={undefined}
                    transition
                    disablePortal={false}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                      >
                        <Box sx={classes.multiMenuRoot}>
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow">
                                {item.child.map((subitem, indexChild) => {
                                  if (subitem.child) {
                                    return (
                                      <MenuItem
                                        key={indexChild.toString()}
                                        onClick={handleClose}
                                        onMouseEnter={(e) => handleToggleChild(e, item, subitem.id)}
                                        sx={classes.menuList}
                                        className="menuList"
                                      >
                                        <ListItemText primary={subitem.name} />
                                        {childMenu(menuChild, subitem, anchorChild)}
                                        <ChevronRightIcon fontSize="small" />
                                      </MenuItem>
                                    );
                                  }
                                  return (
                                    <MenuItem
                                      key={indexChild.toString()}
                                      onMouseEnter={(e) => handleCloseChild(e, item)}
                                      onClick={handleClose}
                                      className="menuList"
                                      sx={{
                                        ...classes.menuList,
                                        ...(curURL === curOrigin + subitem.link && classes.current)
                                      }}
                                    >
                                      <ListItem disableGutters disableRipple sx={classes.link} className="link" button component="a" href={subitem.link}>
                                        <ListItemText primary={subitem.name} />
                                      </ListItem>
                                    </MenuItem>
                                  );
                                })}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Box>

                      </Grow>
                    )}
                  </Popper>
                </div>
              </li>
            ) : (
              <li key={index.toString()}>
                <div>
                  <Button href={item.link}>{item.name}</Button>
                </div>
              </li>
            )}
          </Fragment>
        ))}
      </>
    </Box>
  );
}

MultiLevelHover.propTypes = {
  dataMenu: PropTypes.array.isRequired
};

export default MultiLevelHover;
