import { makeStyles } from 'tss-react/mui';
import Color from 'color';
import bgImage from 'shared-utils/assets/footer_bg.webp';

const useStyles = makeStyles()((theme) => ({
  extra: {
    // backgroundColor: 'red',
  },
  root: {
    // backgroundColor: theme.palette.background.paper,
    fontFamily: 'Inter,sans-serif',
    backgroundColor: '#222',
    backgroundImage: `url(${bgImage.src})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '455px',
    color: theme.palette.custom.fonts.fontFive,

    '& .container-large': {
      width: '100%',
      maxWidth: '80rem',
      margin: '0 auto',
    },
    //padding-vertical
    '& .padding-vertical': {
      padding: '5rem 0',
    },
    '& .padding-bottom.padding-xxlarge': {
      paddingBottom: '5rem',
    },

    '& .padding-top.padding-medium': {
      paddingTop: '2rem',
    },

    '& .padding-global': {
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
    },

    '& .line-divider': {
      backgroundColor: '#f8e4e433',
      width: '100%',
      height: '1px',
    },

    '& .bottom-wrapper': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '2rem',
      },
    },

    '& .legal-list': {
      textAlign: 'center',
      gridColumnGap: '.5rem',
      gridRowGap: '0rem',
      whiteSpace: 'normal',
      gridTemplateRows: 'auto',
      gridTemplateColumns: 'max-content',
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      justifyContent: 'center',
      alignSelf: 'center',
      placeItems: 'center',
      display: 'grid',
    },

    '& .legal-list a': {
      color: '#f8e4e4',
      fontSize: '12px',
      textDecoration: 'underline',
    },

    '& .disclaimer-text': {
      color: '#aaa',
      textAlign: 'center',
      fontSize: '.75rem',
    },

    //////////////////////////////////////
    '& .footer__closing--container': {
      '& a': {
        color: theme.palette.custom.fonts.highlight,
      },
    },
    '& .MuiDivider-root': {
      margin: theme.spacing(4, 0),
    },
    '& p': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    '& .footer__logo--container': {
      '& p': {
        marginTop: theme.spacing(1),
        marginBottom: 0,
      },
    },
    '& .footer__logo': {
      width: '180px',
    },
    '& .footer__closing--text': {
      color: theme.palette.custom.fonts.fontThree,
    },
    '& .footer__links': {
      marginTop: '1rem',
    },
    '& h3': {
      color: theme.palette.custom.fonts.fontThree,
      fontWeight: 500,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    '& .links__group': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& a': {
        margin: '0.5rem 0',
        color: 'inherit',
        textDecoration: 'none',
        paddingBottom: '1rem',
        borderBottom: `solid 1px ${theme.palette.custom.fonts.fontFour}`,
        transition: '0.2s',
        width: '100%',
        '&:hover': {
          color: Color(theme.palette.custom.fonts.fontOne).alpha(0.6).string(),
        },
      },
      '&.forbole': {
        '& a:last-child': {
          paddingBottom: '0',
          borderBottom: 'none',
        },
      },
      '&.media': {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        '& a': {
          borderBottom: 'none',
          padding: 0,
          width: 'auto',
        },
        '&.media': {
          display: 'grid',
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
      '& .MuiDivider-root': {
        marginBottom: 0,
      },
      '& .footer__closing--container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(1, 0),
      },
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiDivider-root': {
        marginTop: theme.spacing(5),
      },
      '& .footer': {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      '& .footer__links': {
        gridColumn: '2/5',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop: 0,
      },
      '& h3': {
        fontSize: '1.125rem',
        marginTop: 0,
      },
      '& .footer__social': {
        justifyContent: 'flex-end',
      },
    },
  },
}));

export default useStyles;
