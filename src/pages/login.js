import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import i18nconfig from '../i18n';
import Copyright from '../components/Copyright';

export default function Login() {
  const langlist = i18nconfig.options.resources;
  const navigate = useNavigate();

  const location = useLocation();
  const fullPath = location.pathname;

  const localeRoute = (newLang) => {
    const pathArr = fullPath.split('/');
    return fullPath.replace(pathArr[1], newLang);
  };

  const { i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    navigate(localeRoute(lang));
  };

  return (
    <div>
      <h2>Login</h2>
      {Object.keys(langlist).map((lang, index) => (
        <Button variant="contained" key={index.toString()} onClick={() => changeLang(lang)}>{lang}</Button>
      ))}
      <Copyright />
    </div>
  );
}
