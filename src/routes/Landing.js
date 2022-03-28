import React, { lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CorporateTemplate from '../components/Templates/Corporate';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Error = lazy(() => import('../pages/error'));

function Landing() {
  const { i18n } = useTranslation();

  return (
    <CorporateTemplate>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
        <Route path={`${i18n.language}/`} element={<Home />} />
        <Route path="/about" element={<Navigate to={`/${i18n.language}/about`} />} />
        <Route path={`${i18n.language}/about`} element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </CorporateTemplate>
  );
}

export default Landing;
