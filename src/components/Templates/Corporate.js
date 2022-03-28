import React from 'react';
import PropTypes from 'prop-types';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CustomLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        style={{ color: match ? 'green' : 'grey' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ' (active)'}
    </>
  );
}

function Landing(props) {
  const { children } = props;
  const { i18n } = useTranslation();

  return (
    <div>
      <CustomLink to={`${i18n.language}/about`}>about</CustomLink>
      &nbsp;
      <Link to="/register">register</Link>
      &nbsp;
      <Link to="/login">login</Link>
      &nbsp;
      { children }
    </div>
  );
}

Landing.propTypes = {
  children: PropTypes.node.isRequired
};

export default Landing;
