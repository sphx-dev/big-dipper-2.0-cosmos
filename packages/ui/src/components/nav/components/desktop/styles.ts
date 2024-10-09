import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      '& .MuiDrawer-paperAnchorDockedLeft': {
        border: 'none',
      },
    },
    logo: {
      width: '216px',
      height: '80px',
      padding: theme.spacing(2, 1.75, 2.5),
      '&:hover': {
        cursor: 'pointer',
      },
    },
    appBar: {
      '&&': {
        background: theme?.palette?.background?.default,
        color: theme?.palette?.custom?.fonts?.fontTwo ?? 'inherit',

        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
        '&.MuiPaper-elevation4': {
          boxShadow: 'none',
        },
      },
    },
  };
});

export default useStyles;
