import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';
import user from 'api/user';
import classes from './sidebar-big-style';

function MenuProfile(props) {
  const { userAttr } = props;
  const [status, setStatus] = useState(user.status);
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();
  
  const setStatusIntoClass = st => {
    switch (st) {
      case 'online':
        return classes.online;
      case 'idle':
        return classes.idle;
      case 'bussy':
        return classes.bussy;
      default:
        return classes.offline;
    }
  };

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
    <div>
      <ButtonBase className="avatarHead" sx={classes.avatarHead} onClick={handleOpen}>
        <Avatar
          alt={userAttr.name}
          src={userAttr.avatar}
          className="avatar"
          sx={{
            ...classes.avatar,
            ...classes.bigAvatar
          }}
        />
        <Box
          component="i"
          className={clsx('dotStatus', 'pinned')}
          sx={{
            ...classes.dotStatus,
            ...classes.pinned,
            ...(setStatusIntoClass(status))
          }}
        />
      </ButtonBase>
      <Menu
        id="status-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="statusMenu"
        sx={classes.statusMenu}
      >
        <MenuItem className="profile" sx={classes.profile}>
          <Avatar
            alt={userAttr.name}
            src={userAttr.avatar}
            className="avatar"
            sx={{ ...classes.avatar, ...classes.bigAvatar }}
          />
          <Box className="name" sx={classes.name}>
            <h5>{userAttr.name}</h5>
            <Box
              component="i"
              className="dotstatus"
              sx={{
                ...classes.dotStatus,
                ...(setStatusIntoClass(status))
              }}
            />
            {t(status)}
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('online')}>
          <Box
            component="i"
            className="dotstatus"
            sx={{
              ...classes.dotStatus,
              ...classes.online
            }}
          />
          {t('online')}
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('idle')}>
          <Box
            component="i"
            className="dotstatus"
            sx={{
              ...classes.dotStatus,
              ...classes.idle
            }}
          />
          {t('idle')}
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('bussy')}>
          <Box
            component="i"
            className="dotstatus"
            sx={{
              ...classes.dotStatus,
              ...classes.bussy
            }}
          />
          {t('bussy')}
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('offline')}>
          <Box
            component="i"
            className="dotstatus"
            sx={{
              ...classes.dotStatus,
              ...classes.offline
            }}
          />
          {t('offline')}
        </MenuItem>
      </Menu>
    </div>
  );
}

MenuProfile.propTypes = {
  userAttr: PropTypes.object,
};

MenuProfile.defaultProps = {
  MenuProfile: {},
};

export default MenuProfile;
