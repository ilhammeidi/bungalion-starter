import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { lighten } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import i18nconfig from '../i18n';
import Card from '../components/Card';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function Home() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const langlist = i18nconfig.options.resources;
  console.log(`cur lang: ${i18n.language}`);

  const navigate = useNavigate();
  const location = useLocation();
  const fullPath = location.pathname;

  const localeRoute = (newLang) => {
    const pathArr = fullPath.split('/');
    return fullPath.replace(pathArr[1], newLang);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    navigate(localeRoute(lang));
    // document.location = localeRoute(lang);
  };

  const mimi = {
    border: '1px solid',
    borderColor: 'primary.light',
    '& .dede': {
      margin: '20px',
      background: (theme) => lighten(theme.palette.primary.main, 0.2),
    }
  };

  return (
    <div>
      <Helmet>
        <title>Rumah</title>
      </Helmet>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, pl: 2, ...mimi }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Rungsing
          </Typography>
          <div className="dede">
            <Button className={classes.root}>Hook</Button>
          </div>
          <Card />
          <ProTip />
          {Object.keys(langlist).map((lang, index) => (
            <Button key={index.toString()} onClick={() => changeLang(lang)}>{lang}</Button>
          ))}
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
