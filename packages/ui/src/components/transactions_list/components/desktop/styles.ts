import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '500px',
    height: '50vh',
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      minHeight: '65vh',
    },
  },
  cell: {
    ...(theme.mixins.tableCell as CSSObject),
  },
  body: {
    color: theme.palette.custom.fonts.fontTwo,
  },
  noData: {
    marginTop: '120px',
  },
}));

export default useStyles;
