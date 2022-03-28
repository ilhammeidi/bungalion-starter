import React, { useContext } from 'react';
import { Context } from '../store';

export default function Header() {
  const [state] = useContext(Context);

  return (
    <div>
      {state.sidebar === 'list' && <h2>Sidebar List</h2>}
      {state.sidebar === 'big' && <h2>Sidebar Big</h2>}
    </div>
  );
}
