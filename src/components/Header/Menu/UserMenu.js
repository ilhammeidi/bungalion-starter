import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import link from 'assets/text/link';
import { useTranslation } from 'react-i18next';
import Settings from './Settings';
import classes from '../header-style';

function UserMenu(props) {
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box sx={classes.userMenu} className="userMenu">
      { isDesktop && (
        <div>
          <Button href={link.login}>{t('common:login')}</Button>
          <Button variant="contained" color="primary" href={link.register}>{t('common:register')}</Button>
          <Box component="span" className="vDivider" sx={classes.vDivider} />
        </div>
      )}
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
    </Box>
  );
}

UserMenu.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

UserMenu.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default UserMenu;
