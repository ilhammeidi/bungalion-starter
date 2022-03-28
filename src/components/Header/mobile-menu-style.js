const identation = 8;
const sidenavStyles = {
  paperNav: (theme) => ({
    '& .MuiDrawer-paper': {
      width: '100%',
      [theme.breakpoints.up(680)]: {
        width: 300,
      },
    }
  }),
  mobileNav: (theme) => ({
    background: theme.palette.background.paper,
    margin: theme.spacing(10, 0, 3),
    overflow: 'auto',
    position: 'relative'
  }),
  sideMultilv: {
    padding: (theme) => theme.spacing(3, 2, 0),
    '& > div': {
      marginLeft: 0,
    }
  },
  sideSinglelv: {
    py: 3,
    px: 2,
  },
  userMenu: {
    p: 2
  },
  hasGrandChild: {
    padding: 0,
    '& > div': {
      marginLeft: 0
    }
  },
  noChild: {
    py: 1,
  },
  menuList: {
    py: 0.5,
    '& span': {
      textTransform: 'capitalize',
      fontSize: 14,
    }
  },
  sideGroup: {
    paddingLeft: identation * 2,
    '& .menuList': {
      py: 1,
    }
  },
  groupChild: {
    padding: (theme) => theme.spacing(2, 0, 2, 3)
  },
  sideGroupLink: {
    paddingLeft: identation
  },
  titleMega: (theme) => ({
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 11,
    color: theme.palette.primary.main
  }),
  current: (theme) => ({
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '& svg': {
      fill: theme.palette.primary.main
    }
  }),
  currentParent: (theme) => ({
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '& svg': {
      fill: theme.palette.primary.main
    }
  })
};

export default sidenavStyles;
