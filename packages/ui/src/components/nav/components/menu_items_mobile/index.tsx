import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getMenuItems } from '@/components/nav/components/menu_items_mobile/utils';
import useStyles from '@/components/nav/components/menu_items_mobile/styles';
import { Button, Menu, MenuItem, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const ITEM_HEIGHT = 48;

const MenuItemsMobile = ({ className }: { className?: string }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { t } = useAppTranslation('common');
  const items = getMenuItems();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ev) => {
    console.log('ev', ev, ev.target, ev.target.getAttribute('href'));
    const href = ev.target.getAttribute('href');
    setAnchorEl(null);
    if (href) {
      router.push(ev.target.getAttribute('href'));
    }
  };

  return (
    <div className={cx(className)} style={{ width: '40px', height: '100%', alignSelf: 'center' }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items?.map((item) => {
          let isActive = false;
          if (item.url === router?.asPath) {
            isActive = true;
          }
          if (router?.asPath?.includes(item.url) && item.url !== '/') {
            isActive = true;
          }
          return (
            <MenuItem
              key={item.key}
              LinkComponent={'a'}
              href={item.url}
              className={cx(classes.root, { active: isActive })}
              onClick={handleClose}
            >
              {t(item.key)}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MenuItemsMobile;
