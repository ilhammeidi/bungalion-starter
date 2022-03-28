import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>Aboutxxxeee</h2>
      <h3>{t('Welcome to React')}</h3>
    </div>
  );
}
