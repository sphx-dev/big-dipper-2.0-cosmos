import Color from 'color';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  toolbar: {
    '&&': {
      height: 'auto !important',
    },
  },
  root: {
    '& .MuiListItemIcon-root': {
      minWidth: '48px',
    },
    '&.MuiListItemButton-gutters': {
      padding: theme.spacing(1, 0.5),
    },
    '& .MuiListItemText-root': {
      color: theme.palette.custom.general.icon,
    },
    '&.active': {
      '& .MuiListItemIcon-root': {
        '& svg': {
          fill: theme?.palette?.primary?.main,
          color: theme?.palette?.primary?.main,
        },
      },
      '& .MuiTypography-root': {
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
