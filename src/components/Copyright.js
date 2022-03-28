import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';

export default function Copyright() {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t('Welcome to React')}</div>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          After Life
        </Link>
        &nbsp;
        {new Date().getFullYear()}
        .
      </Typography>
    </div>
  );
}
