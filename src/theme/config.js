let themeType = '';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('bungalionTheme') || 'light';
}

const uiState = {
  header: 'mega', /* available: basic, droplist, mega */
  sidebar: 'big', /* available: list, big */
  color: 'money',
  theme: themeType,
  direction: 'ltr'
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_HEADER':
      console.log(action.payload);
      return {
        ...state,
        header: action.payload
      };
    case 'SET_SIDEBAR':
      return {
        ...state,
        sidebar: action.payload
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    case 'SET_DIRECTION':
      return {
        ...state,
        direction: action.payload
      };
    default:
      throw new Error();
  }
}

export default uiState;
