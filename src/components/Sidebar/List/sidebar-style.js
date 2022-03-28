import { alpha } from '@mui/material/styles';
import lightGreen from '@mui/material/colors/lightGreen';
import red from '@mui/material/colors/red';
import amber from '@mui/material/colors/amber';
import grey from '@mui/material/colors/grey';

const drawerWidth = 240;
const styles = {
  user: {
    justifyContent: 'center'
  },
  drawer: {
    width: drawerWidth,
  },
  drawerWrap: {
    '& .MuiDrawer-paperAnchorLeft': {
      position: 'relative',
      border: 'none',
      background: 'none'
    }
  },
  drawerPaper: (theme) => ({
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    border: 'none',
    background: 'none',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  opened: {
    '& .primary, & .icon': {
      color: (theme) => theme.palette.primary.main,
    },
  },
  drawerPaperClose: (theme) => ({
    width: theme.spacing(8),
    position: 'absolute',
    overflowX: 'hidden',
    transition: theme.transitions.create(['width', 'background-color'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& .user': {
      justifyContent: 'flex-start'
    },
    '& .bigAvatar': {
      width: 40,
      height: 40,
    },
    '& nav': {
      display: 'none'
    },
    '&:hover': {
      width: drawerWidth,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[6],
      '& nav': {
        display: 'block'
      }
    },
    '& .brand': {
      display: 'none'
    },
    '& .profile': {
      flexDirection: 'row',
      top: theme.spacing(6),
      padding: theme.spacing(0.5),
      textAlign: 'left',
      '& button': {
        width: 'auto'
      }
    },
    '& .avatar': {
      marginRight: theme.spacing(3)
    },
    '& .menuContainer': {
      paddingTop: theme.spacing(10),
      paddingBottom: 0,
    },
  }),
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    position: 'fixed',
  },
  drawerInnerMobile: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    backgroundColor: (theme) => theme.palette.type === 'dark' ? alpha(theme.palette.background.paper, 0.75) : fade(theme.palette.background.paper, 0.95),
  },
  drawerHeader: (theme) => ({
    zIndex: 1,
    position: 'relative',
    minHeight: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(8),
    }
  }),
  avatar: {
    margin: '10px 12px',
  },
  bigAvatar: {
    width: 80,
    height: 80,
    boxShadow: (theme) => theme.shadows[2]
  },
  brandBar: (theme) => ({
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:after': {
      transition: theme.transitions.create(['box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  }),
  darker: {
    background: 'none',
  },
  nested: (theme) => ({
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    margin: `${theme.spacing(0.5)}px 0`,
    paddingLeft: theme.spacing(7)
  }),
  child: {
    '& a': {
      pl: 8,
    }
  },
  title: (theme) => ({
    fontSize: 10,
    textTransform: 'uppercase',
    paddingLeft: theme.spacing(7),
    marginTop: theme.spacing(3),
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold'
  }),
  dense: {
    p: 1,
    '& > $title:first-of-type': {
      margin: '0'
    },
    '& .head': {
      pl: 7
    }
  },
  active: (theme) => ({
    backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
    '& $primary': {
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark,
    },
    '& $icon svg': {
      fill: theme.palette.primary.dark,
    },
    '&:hover, &:focus': {
      backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
    }
  }),
  nolist: {
    listStyle: 'none',
  },
  primary: {
    whiteSpace: 'nowrap'
  },
  icon: (theme) => ({
    minWidth: theme.spacing(5),
    color: alpha(theme.palette.text.disabled, 0.48)
  }),
  iconed: {
    '&.opened': {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 5,
        height: (theme) => theme.spacing(6),
        top: 0,
        left: 0,
        background: (theme) => alpha(theme.palette.primary.main, 0.5)
      }
    }
  },
  head: (theme) => ({
    padding: `${theme.spacing(1)}px 0`,
    margin: `${theme.spacing(1)}px 0`,
    borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    paddingLeft: theme.spacing(3),
    '&$iconed': {
      paddingLeft: theme.spacing(3),
    },
    '& svg[class^="MuiSvgIcon"]': {
      left: -10,
      position: 'relative'
    },
  }),
  headCapital: (theme) => ({
    padding: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(9)}px`,
    left: theme.spacing(1) * -2,
    position: 'relative',
    textTransform: 'uppercase',
    borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    margin: `${theme.spacing(1)}px`,
    '& span': {
      fontSize: 14
    }
  }),
  copyright: (theme) => ({
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    position: 'fixed',
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      position: 'absolute',
    },
    left: theme.spacing(3),
    lineHeight: '24px',
  }),
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px 5px',
    height: 64,
    position: 'relative',
    textDecoration: 'none',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    color: (theme) => theme.palette.text.primary,
    '& img': {
      width: 30,
      marginRight: 10,
    },
  },
  brandBig: (theme) => ({
    paddingTop: theme.spacing(4),
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: 68
    },
    '& h3': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: 500,
      color: theme.palette.text.primary,
    }
  }),
  profile: {
    height: 120,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 10,
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    my: 2,
    zIndex: 0,
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110
    },
    '& button': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: 0,
      minHeight: 20,
      marginTop: 4,
    }
  },
  statusMenu: {
    '& li': {
      width: 100
    }
  },
  dotStatus: {
    width: 8,
    height: 8,
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: 4
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
  menuContainer: (theme) => ({
    overflow: 'auto',
    height: 'calc(100% - 64px)',
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    py: 5,
    '&.withProfile': {
      paddingTop: theme.spacing(19)
    },
    '&.landingNav': {
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(5)
      },
      [theme.breakpoints.down('lg')]: {
        height: 'calc(100% - 80px)',
        paddingTop: theme.spacing(2)
      }
    },
    '&.rounded': {
      paddingRight: theme.spacing(1.5),
      '& a': {
        borderRadius: theme.spacing(),
      },
      '& .opened': {
        '&:before': {
          background: theme.palette.primary.main
        }
      }
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
        backgroundColor: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.4)',
      }
    }
  }),
  divider: {
    mt: 1
  },
  badge: {
    height: 'auto'
  }
};

export default styles;
