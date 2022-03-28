import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { withTranslation } from '~/i18n';
import classes from '../header-style';

function SearchField(props) {
  const [value, setVal] = useState('');
  const { t, short } = props;
  const classes = useStyles();

  const handleUpdateValue = event => {
    setVal(event.target.value);
  };

  return (
    <section sx={classes.search} className={clsx('search', short ? 'short' : '')}>
      <FormControl component="form" sx={classes.root} className="root">
        <OutlinedInput
          value={value}
          onChange={(e) => handleUpdateValue(e)}
          className="input"
          sx={classes.input}
          placeholder={t('common:list_search')}
          startAdornment={<SearchIcon sx={classes.searchIcon} />}
          labelWidth={0}
        />
      </FormControl>
    </section>
  );
}

SearchField.propTypes = {
  t: PropTypes.func.isRequired,
  short: PropTypes.bool,
};

SearchField.defaultProps = {
  short: false
};

SearchField.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(SearchField);
