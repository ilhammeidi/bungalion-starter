import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../store';
import Mega from './Mega';
import DropList from './DropList';
import Basic from './Basic';

function Main(props) {
  const [state] = useContext(Context);
  const { onToggleDark, onToggleDir } = props;
  return (
    <div>
      { state.header === 'mega' && <Mega onToggleDark={onToggleDark} onToggleDir={onToggleDir} /> }
      { state.header === 'droplist' && <DropList onToggleDark={onToggleDark} onToggleDir={onToggleDir} /> }
      { state.header === 'basic' && <Basic onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
    </div>
  );
}

Main.propTypes = {
  onToggleDark: PropTypes.func,
  onToggleDir: PropTypes.func
};

Main.defaultProps = {
  onToggleDark: () => {},
  onToggleDir: () => {}
};

export default Main;
