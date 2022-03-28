import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../store';
import SidebarBig from './Big/SidebarBig';
import SidebarList from './List/SidebarList';

function Main(props) {
  const [state] = useContext(Context);
  const { onToggleDark, onToggleDir } = props;
  return (
    <div>
      { state.sidebar === 'big' && <SidebarBig /> }
      { state.sidebar === 'list' && <SidebarList /> }
    </div>
  );
}

export default Main;
