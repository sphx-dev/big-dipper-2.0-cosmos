import { FC } from 'react';
import Typography from '@mui/material/Typography';
import useStyles from '@/components/footer/styles';

const Footer: FC<{ className?: string }> = ({ className }) => {
  const { classes, cx } = useStyles();
  const year = new Date().getFullYear();

  return (
    <div className={cx(classes.root, className)}>
      <Typography className="footer__closing--text" align="center">
        Powered By Sphinx © {year}
      </Typography>
    </div>
  );
};

export default Footer;
