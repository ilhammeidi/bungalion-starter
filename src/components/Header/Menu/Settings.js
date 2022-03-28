import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import classes from '../header-style';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('oironTheme') || 'light';
}

function Settings(props) {
  const [ctn, setCtn] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  //  function handleChangeLang(lang) {
  //    if (lang === 'ara') {
  //      i18n.changeLanguage('ara');
  //      props.toggleDir('rtl');
  //    } else {
  //      i18n.changeLanguage(lang);
  //      props.toggleDir('ltr');
  //    }
  //  }

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box className={classes.setting}>
      <IconButton
        aria-describedby={id}
        aria-label="Settings"
        onClick={handleClick}
        sx={classes.icon}
        className="icon"
        className={open ? 'active' : ''}
      >
        <SettingsIcon fontSize="inherit" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={ctn}
        sx={classes.settingMenu}
        className="settingMenu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List
          component="nav"
          sx={classes.modeMenu}
          className="modeMenu"
          aria-label="Mode-menu"
          subheader={(
            <ListSubheader component="div">
              Theme Mode
            </ListSubheader>
          )}
        >
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Light</Grid>
                <Grid item>
                  <Switch
                    checked={isDark}
                    onChange={handleChangeMode}
                    value={isDark}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>Dark</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          sx={classes.langMenu}
          className="langMenu"
          aria-label="Language-menu"
          subheader={(
            <ListSubheader component="div">
              Languages
            </ListSubheader>
          )}
        >
          {/* i18n.options.allLanguages && i18n.options.allLanguages.map(val => (
            <ListItem
              key={val}
              role={undefined}
              dense
              button
              onClick={() => handleChangeLang(val)}
            >
              <ListItemIcon>
                <i className={val} />
              </ListItemIcon>
              <ListItemText primary={props.t('common:' + val)} />
              {i18n.language === val && (
                <ListItemSecondaryAction>
                  <CheckIcon color="primary" />
                </ListItemSecondaryAction>
              )}
            </ListItem>
          )) */}
        </List>
      </Popover>
    </Box>
  );
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
  // t: PropTypes.func.isRequired,
};

export default Settings;
