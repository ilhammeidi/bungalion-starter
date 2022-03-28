import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import classes from './mobile-menu-style';
import navMenu from '../data/multiple';
import link from 'assets/text/link';

function MobileMenu(props) {
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
      <List sx={classes.sideGroup} className="sideGroup" component="div" disablePadding>
        {item.child.map((subitem, index) => {
          if (subitem.child) {
            return (
              <div key={index.toString()}>
                <ListItem
                  button
                  className="hasGrandChild"
                  sx={(theme) => ({
                    ...(menu[subitem.id] && classes.current(theme)),
                    ...classes.hasGrandChild
                  })}
                  onClick={() => handleToggle(subitem.id)}
                >
                  {menu[subitem.id] ? <ArrowDropUp /> : <ArrowDropDown />}
                  <ListItemText className="menuList" sx={classes.menuList} primary={subitem.name} />
                </ListItem>
                { childMenu(expand, subitem) }
              </div>
            );
          }
          return (
            <ListItem
              key={index.toString()}
              className="sideGroupLink"
              sx={{
                ...classes.noChild,
                ...classes.sideGroupLink,
                ...(curURL === curOrigin + langPath + subitem.link && classes.current)
              }}
              component="a"
              href={subitem.link}
              button
            >
              <ListItemText className="menuList" sx={classes.menuList} primary={subitem.name} />
            </ListItem>
          );
        })}
      </List>
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
            className="sideMultilv"
            sx={classes.sideMultilv}
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


MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

MobileMenu.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(MobileMenu);
