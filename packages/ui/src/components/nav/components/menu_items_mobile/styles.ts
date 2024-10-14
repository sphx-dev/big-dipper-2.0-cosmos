import Color from 'color';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  toolbar: {
    '&&': {
      height: 'auto !important',
    },
  },
  root: {
    '&.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters': {
      justifyContent: 'end',
      padding: '0.5rem 1.8rem',
      fontSize: '1.1rem',

      '&.active': {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
      },
    },
  },
  listItemText: {
    '&& *': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
}));

export default useStyles;
