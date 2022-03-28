import flag from 'assets/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = {
  header: (theme) => ({
    position: 'fixed',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    background: 'none',
    '&.fixed': {
      background: theme.palette.background.paper,
      boxShadow: theme.palette.type === 'dark' ? `0px 1px 36px -16px ${theme.palette.common.black}` : `0px 1px 36px -16px ${theme.palette.primary.main}`,
      top: 0,
      left: 0,
      '& .logo': {
        '& img': {
          height: 40,
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
      },
      '& .vDivider': {
        minHeight: theme.spacing(3)
      }
    },
    '&.openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
    }
  }),
  noShadow: {
    background: (theme) => theme.palette.background.paper,
    boxShadow: 'none !important',
  },
  headerContent: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      transition: 'all 0.3s ease',
      alignItems: 'center',
      padding: theme.spacing(2, 1),
      [theme.breakpoints.down('md')]: {
        background: 'blue',
        padding: theme.spacing(1, 0),
      },
      display: 'flex'
    }
  }),
  settingMenu: {
    '& .MuiPopover-paper': {
      width: 240
    } 
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block'
    },
    '& img': {
      transition: 'all 0.3s ease',
    }
  },
  navMenu: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& ul li': {
      overflow: 'visible'
    }
  }),
  multiMenu: {
    display: 'block'
  },
  mainMenu: (theme) => ({
    '& > ul:not($multiMenu)': {
      '& li': {
        '& button, & a': {
          fontSize: 16,
          margin: theme.spacing(0, 1),
        }
      },
    },
    '& > ul': {
      listStyle: 'none',
      position: 'relative',
      padding: 0,
      margin: 0,
      '& > li': {
        margin: theme.spacing(0, 0.5),
        display: 'inline-block',
        position: 'relative',
        listStyle: 'none',
        '&:after': {
          content: '""',
          height: 8,
          background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
          width: '0%',
          position: 'absolute',
          bottom: 10,
          zIndex: 0,
          left: theme.spacing(2),
          transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
        },
        '&:hover': {
          transition: 'all 0.3s ease-out',
          color: theme.palette.text.primary,
          '& a, & button': {
            background: 'none'
          },
          '&:before': {
            opacity: 0
          },
          '&:after': {
            width: '50%',
            left: 15,
            borderBottomColor: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          }
        },
        '&[class="active"]': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
          '&:hover': {
            '&:after': {
              width: '60%',
              left: 15
            }
          },
          '&:after': {
            borderBottomColor: theme.palette.primary.light,
            width: '40%',
            left: 15
          }
        },
        '& button, & a': {
          background: 'none',
          textTransform: 'capitalize',
          position: 'relative',
          zIndex: 1,
          fontWeight: theme.typography.fontWeightMedium
        }
      }
    }
  }),
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    '& > div > a': {
      margin: (theme) => theme.spacing(0, 1),
    }
  },
  langMenu: {
    '& i': {
      ...flagIcon
    }
  },
  mobileMenu: (theme) => ({
    marginRight: theme.spacing(1),
    padding: 0,
    '& .bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      },
    }
  }),
  vDivider: (theme) => ({
    margin: theme.spacing(0, 1, 0, 2),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    minHeight: theme.spacing(6)
  }),
  setting: {
    '& .icon': {
      transition: 'all 0.3s ease'
    },
    '& .active': {
      transform: 'rotate(30deg)'
    }
  },
  megaMenuRoot: {
    width: '100%',
    zIndex: 100,
    left: '-5px !important'
  },
  multiMenuRoot: (theme) => ({
    minWidth: 200,
    zIndex: 100,
    '& ul': {
      padding: theme.spacing(1),
      '& li': {
        borderRadius: theme.rounded.small,
        minHeight: 48,
        padding: theme.spacing(1),
        '& svg': {
          fill: theme.palette.text.hint,
          transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
        }
      }
    }
  }),
  megaMenu: {
    padding: (theme) => theme.spacing(4, 0),
    borderRadius: 0,
    maxHeight: 480,
    overflow: 'auto',
  },
  thumbMenu: (theme) => ({
    width: 200,
    height: 78,
    borderRadius: theme.rounded.small,
    margin: theme.spacing(0, 1, 2)
  }),
  titleMega: {
    '& .root': {
      textTransform: 'uppercase',
      fontWeight: (theme) => theme.typography.fontWeightBold + '!important',
      fontSize: '11px !important'
    }
  },
  menuItem: {
    borderRadius: (theme) => theme.rounded.small
  },
  link: {
    padding: '0 !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  current: (theme) => ({
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  }),
  /* Search */
  flex: {
    flex: 1
  },
  search: (theme) => ({
    position: 'relative',
    display: 'flex',
    maxWidth: 600,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      flex: 1
    },
    '& form': {
      width: '100%'
    },
    alignItems: 'center',
    '&.short': {
      width: 300
    },
    '& .input': {
      width: '100%',
      paddingRight: theme.spacing(2),
      background: theme.palette.background.paper,
      paddingLeft: theme.spacing(5),
      borderRadius: theme.rounded.small,
      '& input': {
        maxHeight: 'none',
        padding: theme.spacing(1.5, 0)
      },
      '&:hover': {
        '& fieldset': {
          borderColor: theme.palette.primary.main
        }
      }
    }
  }),
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: (theme) => theme.spacing(1)
  },
  /* Hamburger */
  navLogo: (theme) => ({
    width: '100%',
    '&.invert': {
      '& .logo': {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      '& .mobileMenu': {
        '& .bar': {
          [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            },
          }
        }
      },
    }
  }),
  paperNav: {
    background: (theme) => theme.palette.background.paper,
    backdropFilter: 'saturate(180%) blur(20px)',
    width: '100%',
    position: 'fixed',
    zIndex: 50,
    height: '100%',
  },
  mobileNav: (theme) => ({
    '& .menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: theme.spacing(15),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      listStyle: 'none',
      '& li': {
        textAlign: 'center',
        animationTimingFunction: 'ease',
        '& a': {
          fontSize: 24,
          padding: theme.spacing(1, 4),
          marginBottom: theme.spacing(),
          '&:before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 6,
            opacity: 0.2,
            borderRadius: theme.rounded.small,
            background: theme.palette.primary.main,
            height: '75%',
            width: 0,
            transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
          },
          '&:hover': {
            color: theme.palette.primary.main,
            background: 'none',
            '&:before': {
              width: '100%'
            },
          }
        }
      }
    }
  }),
  menuList: {
    '& .MuiListItemText-primary': {
      textTransform: 'capitalize',
      fontSize: 14
    }
  }
};

export default headerStyles;
