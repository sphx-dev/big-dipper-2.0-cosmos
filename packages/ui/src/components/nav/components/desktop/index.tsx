import AppBar from '@mui/material/AppBar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import { readTheme } from '@/recoil/settings';
import TitleBar from '@/components/nav/components/title_bar';
import MenuItems from '@/components/nav/components/menu_items';
import useStyles from '@/components/nav/components/desktop/styles';
import { useDesktop } from '@/components/nav/components/desktop/hooks';
import ActionBar from '@/components/nav/components/desktop/components/action_bar';

type DesktopProps = {
  className?: string;
  title: string;
};

const Desktop: FC<DesktopProps> = ({ className, title }) => {
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);
  const { isMenu, toggleMenu, turnOffAll, toggleNetwork, isNetwork } = useDesktop();
  return (
    <ClickAwayListener onClickAway={turnOffAll}>
      <AppBar position="relative" className={cx(classes.appBar)}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {theme === 'light' ? (
            <BigDipperLogoRed
              className={classes.logo}
              onClick={toggleMenu}
              role="button"
              aria-label="toggle menu"
            />
          ) : (
            <BigDipperLogoWhite
              className={classes.logo}
              onClick={toggleMenu}
              role="button"
              aria-label="toggle menu"
            />
          )}
          <MenuItems />
        </div>
        <ActionBar toggleNetwork={toggleNetwork} isNetwork={isNetwork} />
        <TitleBar title={title} />
      </AppBar>
    </ClickAwayListener>
  );
};

export default Desktop;
