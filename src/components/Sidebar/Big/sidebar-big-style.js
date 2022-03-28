import { alpha } from '@mui/material/styles';
import lightGreen from '@mui/material/colors/lightGreen';
import red from '@mui/material/colors/red';
import amber from '@mui/material/colors/amber';
import grey from '@mui/material/colors/grey';

const categoryWidth = 104;
const listWidth = 188;

const styles = {
  bigSidebar: (theme) => ({
    color: theme.palette.text.primary,
    py: 1,
    display: 'flex',
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(8),
    },
  }),
  category: {
    width: categoryWidth,
    '& .fixedWrap': {
      px: 1
    }
  },
  fixedWrap: (theme) => ({
    position: 'fixed',
    overflow: 'auto',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      height: 'calc(100% - 80px)',
    },
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)',
      }
    }
  }),
  avatarHead: {
    textAlign: 'center',
    width: '100%',
    p: 0.5,
    mb: 1,
  },
  statusMenu: {
    '& ul': {
      paddingTop: 0,
    },
    '& li': {
      width: 180
    }
  },
  swipeDrawerPaper: {
    width: categoryWidth + listWidth,
  },
  profile: {
    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    py: 2,
  },
  name: {
    textAlign: 'left',
    ml: 1,
    fontSize: 14,
    '& h5': {
      marginBottom: 0
    }
  },
  dotStatus: {
    width: 12,
    height: 12,
    display: 'inline-block',
    borderRadius: '50%',
    border: '1px solid #fff',
    mr: 1,
    '&.pinned': {
      position: 'absolute',
      bottom: 3,
      left: 60,
    }
  },
  online: {
    backgroundColor: lightGreen[500]
  },
  bussy: {
    backgroundColor: red[500]
  },
  idle: {
    backgroundColor: amber[500]
  },
  offline: {
    backgroundColor: grey[500]
  },
  menuHead: (theme) => ({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 4,
    '&:hover': {
      background: theme.palette.action.hover,
    },
    '&.active': {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 5,
        height: 68,
        borderRadius: 5,
        top: 0,
        left: theme.spacing(1) * -1,
        background: theme.palette.primary.dark
      },
      '& .icon, .text': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
      },
    },
    '& .icon': {
      color: alpha(theme.palette.text.secondary, 0.24),
      display: 'block',
      marginBottom: theme.spacing(1),
      fontSize: 32,
    },
    '& .text': {
      width: 80,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: theme.typography.fontWeightBold,
      whiteSpace: 'nowrap',
      display: 'block',
      fontSize: 12,
      color: theme.palette.text.secondary
    }
  }),
  listMenu: (theme) => ({
    width: listWidth,
    marginTop: -10,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& > ul': {
      width: listWidth,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(8),
      marginLeft: theme.spacing(1)
    },
    '& .icon': {
      color: alpha(theme.palette.text.secondary, 0.32),
      fontSize: 14,
    },
    '& .text': {
      paddingLeft: 0,
      paddingRight: 0,
      '& span': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        display: 'block',
      }
    },
    '& .item': {
      borderRadius: 4,
      textAlign: 'left',
      paddingLeft: 0,
      margin: '4px 0',
      '& > div:first-of-type': {
        mx: 1,
        minWidth: 'auto'
      },
      '&.active': {
        backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.light, 0.24) : alpha(theme.palette.secondary.light, 0.24),
        '& .icon': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        },
        '& .text': {
          '& span': {
            color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
          }
        },
        '&:hover': {
          backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.light, 0.24) : alpha(theme.palette.secondary.light, 0.24),
        },
        '&:focus': {
          backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.light, 0.24) : alpha(theme.palette.secondary.light, 0.24),
        }
      }
    }
  }),
  drawerPaperClose: {
    width: 0,
    padding: 0,
    overflowX: 'hidden',
    '& ul': {
      position: 'relative'
    }
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    mt: 2,
    paddingLeft: 0,
    display: 'block',
    color: 'primary.main',
    lineHeight: '28px',
    fontWeight: '900'
  },
  childMenuWrap: {
    opacity: 0,
    transform: 'translateX(-5px)'
  },
  menuLoaded: {
    opacity: 1,
    transform: 'translateX(0px)',
    transition: 'all 0.2s ease-out'
  }
};

export default styles;
