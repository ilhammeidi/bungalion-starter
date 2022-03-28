import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import link from 'assets/text/link';
import navMenu from 'api/menu/mega';
import classes from '../mobile-menu-style';

function MegaMobile(props) {
  const { toggleDrawer, open } = props;
  const [expand, setExpand] = useState({});
  const { t } = useTranslation();

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (id) => {
    setExpand({
      ...expand,
      [id]: !expand[id]
    });
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.options.localeSubpaths[i18n.language]);
  }, []);

  const childMenu = (menu, item) => (
    <Collapse in={menu[item.id] || false} timeout="auto" unmountOnExit>
      {item.child.map((subitem, index) => (
        <List
          key={index.toString()}
          sx={classes.groupChild}
          className="groupChild"
          component="div"
          disablePadding
          subheader={(
            <ListSubheader
              sx={classes.titleMega}
              className="titleMega"
              disableSticky
              component="div"
              id="nested-list-subheader"
            >
              {subitem.name}
            </ListSubheader>
          )}
        >
          {subitem.child.map((granditem, indexChild) => (
            <ListItem
              key={indexChild.toString()}
              sx={classes.noChild}
              className={clsx('noChild', curURL === curOrigin + langPath + granditem.link ? 'current' : '')}
              component="a"
              href={granditem.link}
              button
            >
              <ListItemText className="menuList" sx={classes.menuList} primary={granditem.name} />
            </ListItem>
          ))}
        </List>
      ))}
    </Collapse>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      sx={classes.paperNav}
      className="paperNav"
    >
      <Box
        sx={classes.mobileNav}
        className="mobileNav"
        role="presentation"
      >
        <div className={open ? 'menuOpen' : ''}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            sx={classes.sideMultilv}
            className="sideMultilv"
          >
            {navMenu.map((item, index) => {
              if (item.child) {
                return (
                  <div key={index.toString()}>
                    <ListItem
                      button
                      sx={expand[item.id] && classes.currentParent}
                      onClick={() => handleToggle(item.id)}
                    >
                      <ListItemText className="menuList" sx={classes.menuList} primary={item.name} />
                      {expand[item.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    { childMenu(expand, item) }
                  </div>
                );
              }
              return (
                <ListItem
                  key={index.toString()}
                  className="noChild"
                  sx={{
                    ...classes.noChild,
                    ...(curURL === curOrigin + langPath + item.link && classes.current)
                  }}
                  button
                  href={item.link}
                >
                  <ListItemText className="menuList" sx={classes.menuList} primary={item.name} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List sx={classes.userMenu} className="userMenu">
            {['login', 'register'].map((text, index) => (
              <ListItem
                key={index.toString()}
                className="noChild"
                sx={{
                  ...classes.noChild,
                  ...(curURL === curOrigin + langPath + '/' + text && classes.current)
                }}
                component="a"
                href={link[text]}
                button
              >
                <ListItemText className="menuList" sx={classes.menuList} primary={t('common:' + text)} />
              </ListItem>
            ))}
          </List>
        </div>
      </Box>
    </SwipeableDrawer>
  );
}


MegaMobile.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

MegaMobile.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default MegaMobile;
