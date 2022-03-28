import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import navMenu from 'api/menu/single';
import navPage from 'api/menu/sample-pages';
import link from 'assets/text/link';
import classes from '../mobile-menu-style';

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
    <Collapse in={menu.samplePage || false} timeout="auto" unmountOnExit>
      {item.map((subitem, index) => (
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
              className="noChild"
              key={indexChild.toString()}
              sx={{
                ...classes.noChild,
                ...(curURL === curOrigin + langPath + granditem.link && classes.current)
              }}
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
          <List component="nav" className="sideSinglelv" sx={classes.sideSinglelv}>
            {navMenu.map((item, index) => (
              <ListItem
                button
                index={index.toString()}
                component="a"
                href={`#${item}`}
                key={item}
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                <ListItemText primary={item} className="menuList" sx={classes.menuList} />
              </ListItem>
            ))}
            <ListItem
              button
              className={expand.samplePage ? 'currentParent' : ''}
              onClick={() => handleToggle('samplePage')}
            >
              <ListItemText className="menuList" sx={classes.menuList} primary={t('common:header_sample_page')} />
              {expand.samplePage ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            { childMenu(expand, navPage) }
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
  open: PropTypes.bool.isRequired
};

MobileMenu.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default MobileMenu;
