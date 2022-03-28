import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { withTranslation } from '~/i18n';
import navMenu from '../data/single';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props) {
  const {
    menuPrimary,
    singleNav,
    t
  } = props;

  return (
    <Fragment>
      <Scrollspy
        items={navMenu}
        currentClassName="active"
      >
        {menuPrimary.map(item => (
          <li key={item.id.toString()}>
            {singleNav ? (
              <Button component={AnchorLink} href={item.url}>
                {t('education-landing:header_' + item.name)}
              </Button>
            ) : (
              <Button href={'/' + item.url}>
                {t('education-landing:header_' + item.name)}
              </Button>
            )}
          </li>
        ))}
        <li>
          <Button href="#!">
            {t('common:header_sample_page')}
          </Button>
        </li>
      </Scrollspy>
    </Fragment>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  singleNav: PropTypes.bool,
  t: PropTypes.func.isRequired
};

MixedNav.defaultProps = {
  singleNav: false
};

MixedNav.getInitialProps = async () => ({
  namespacesRequired: ['common', 'education-landing'],
});

export default withTranslation(['common', 'education-landing'])(MixedNav);
