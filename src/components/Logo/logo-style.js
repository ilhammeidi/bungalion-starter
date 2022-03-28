const useStyles = {
  logo: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
  }),
  landscape: {
    alignItems: 'center',
    position: 'relative',
    top: -2,
    '& img': {
      marginRight: (theme) => theme.spacing(1)
    }
  },
  portrait: {
    display: 'block',
    margin: '0 auto 8px',
    '& img': {
      margin: (theme) => `0 auto ${theme.spacing(1)}px`,
      display: 'block'
    }
  },
  small: (theme) => ({
    fontSize: 16,
    '& img': {
      maxWidth: 34,
      height: 34,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 34,
        height: 34
      }
    }
  }),
  medium: {
    fontSize: 22,
    '& img': {
      maxWidth: 54,
      height: 54
    }
  },
  large: {
    fontSize: 28,
    '& img': {
      maxWidth: 64,
      height: 64
    }
  }
};

export default useStyles;
