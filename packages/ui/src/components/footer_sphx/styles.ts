import { makeStyles } from 'tss-react/mui';
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
  },
}));

export default useStyles;
