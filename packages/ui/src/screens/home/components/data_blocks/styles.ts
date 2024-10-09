import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'repeat(1, 1fr)',
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(2),
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  blockHeight: {
    background: theme.palette.custom.primaryData.one,
  },
  blockTime: {
    background: theme.palette.custom.primaryData.two,
  },
  price: {
    background: theme.palette.custom.primaryData.three,
  },
  validators: {
    background: theme.palette.custom.primaryData.four,
  },
}));

export default useStyles;
