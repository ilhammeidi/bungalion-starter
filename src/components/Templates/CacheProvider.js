import React from 'react';
import PropTypes from 'prop-types';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function RTL(props) {
  const { rtl, children } = props;
  return (
    <div>
      {rtl ? <CacheProvider value={cacheRtl}>{children}</CacheProvider> : children}
    </div>
  );
}

RTL.propTypes = {
  rtl: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
