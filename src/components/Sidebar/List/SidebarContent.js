import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';
import MainMenu from './Menu';
import classes from './sidebar-style';

function SidebarContent(props) {
  const { t } = useTranslation();
  
  const {
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    userAttr
  } = props;
  const [transform, setTransform] = useState(0);
  const refSidebar = useRef(null);

  const setStatus = st => {
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

  const handleScroll = (event) => {
    setTransform(event.target.scrollTop);
  };

  useEffect(() => {
    refSidebar.current.addEventListener('scroll', handleScroll);

    return () => {
      refSidebar.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      className="drawerInner"
      sx={{
        ...classes.drawerInner,
        ...(!drawerPaper && classes.drawerPaperClose)
      }}
    >
      <Box className="drawerHeader" sx={classes.drawerHeader}>
        <Box
          className="profile"
          sx={classes.profile}
          style={{ opacity: 1 - (transform / 100), marginTop: transform * -0.3 }}
        >
          <Avatar
            alt={userAttr.name}
            src={userAttr.avatar}
            className="avatar"
            sx={{ ...classes.avatar, ...classes.bigAvatar }}
          />
          <div>
            <h4>{userAttr.name}</h4>
            <Button size="small" onClick={openMenuStatus}>
              <i className="dotStatus" sx={{ ...classes.dotStatus, ...(setStatus(status)) }} />
              {t(status)}
            </Button>
            <Menu
              id="status-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenuStatus}
              className="statusMenu"
              sx={classes.statusMenu}
            >
              <MenuItem onClick={() => changeStatus('online')}>
                <Box component="i" className="dotStatus" sx={{ ...classes.dotStatus, ...classes.online }} />
                {t('online')}
              </MenuItem>
              <MenuItem onClick={() => changeStatus('idle')}>
                <Box component="i" className="dotStatus" sx={{ ...classes.dotStatus, ...classes.idle }} />
                {t('idle')}
              </MenuItem>
              <MenuItem onClick={() => changeStatus('bussy')}>
                <Box component="i" className="dotStatus" sx={{ ...classes.dotStatus, ...classes.bussy }} />
                {t('bussy')}
              </MenuItem>
              <MenuItem onClick={() => changeStatus('offline')}>
                <Box component="i" className="dotStatus" sx={{ ...classes.dotStatus, ...classes.offline }} />
                {t('offline')}
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>
      <Box
        id="sidebar"
        ref={refSidebar}
        sx={(theme) => ({ ...classes.menuContainer(theme), ...classes.withProfile })}
        className={clsx('menuContainer', 'withProfile', leftSidebar ? 'rounded' : '')}
      >
        <MainMenu loadTransition={loadTransition} dataMenu={dataMenu} toggleDrawerOpen={toggleDrawerOpen} />
      </Box>
    </Box>
  );
}

SidebarContent.propTypes = {
  userAttr: PropTypes.object,
  drawerPaper: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool,
  dataMenu: PropTypes.array,
  status: PropTypes.string,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func,
  closeMenuStatus: PropTypes.func,
  changeStatus: PropTypes.func,
};

SidebarContent.defaultProps = {
  userAttr: {},
  drawerPaper: true,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  leftSidebar: true,
  dataMenu: [],
  status: '',
  anchorEl: {},
  openMenuStatus: () => {},
  closeMenuStatus: () => {},
  changeStatus: () => {},
};

export default SidebarContent;
