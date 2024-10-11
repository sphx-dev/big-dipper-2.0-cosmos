import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    // [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    // },
  },
  contentWrapper: {
    padding: '2rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '840px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1140px',
    },
    [theme.breakpoints.up(1500)]: {
      maxWidth: '1440px',
    },
  },
  footer: {
    alignSelf: 'stretch',
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      zIndex: 1299,
    },
  },
  appBarPlaceholder: {
    // ...(theme.mixins.toolbar as CSSObject),
  },
  children: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    '& .main-content': {
      width: '100%',
      flex: 1,
    },
  },
}));

export default useStyles;
