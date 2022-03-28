import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18nconfig from '../i18n';
import Landing from './Landing';
import Users from './Users';
import Applications from './Applications';

const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const Error = lazy(() => import('../pages/error'));

function Main() {
  const { i18n } = useTranslation();
  const langlist = i18nconfig.options.resources;

  const pathLang = window.location.pathname.split('/');

  useEffect(() => {
    Object.keys(langlist).forEach((k) => {
      if (k === pathLang[1]) {
        console.log('berubah bahasa via url path');
        // input to localstorage
        i18n.changeLanguage(k);
      }
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route index path="/*" element={<Landing />} />
          <Route element={<Users />}>
            <Route path="/login" element={<Navigate to={`/${i18n.language}/login`} />} />
            <Route path={`${i18n.language}/login`} element={<Login />} />
            <Route path="/register" element={<Navigate to={`/${i18n.language}/register`} />} />
            <Route path={`${i18n.language}/register`} element={<Register />} />
          </Route>
          <Route path="/dashboard/*" element={<Applications />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Main;
