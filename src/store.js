import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import uiState, { reducer } from './theme/config';

export const Context = createContext(uiState);

function Store(props) {
  const [state, dispatch] = useReducer(reducer, uiState);
  const { children } = props;
  const value = useMemo(() => ([
    state, dispatch
  ]), [state]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export default Store;
