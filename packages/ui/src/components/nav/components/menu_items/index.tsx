import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getMenuItems } from '@/components/nav/components/menu_items/utils';
import useStyles from '@/components/nav/components/menu_items/styles';
import { Toolbar } from '@mui/material';

const MenuItems = () => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { t } = useAppTranslation('common');
  const items = getMenuItems();

  return (
    <Toolbar className={classes.toolbar}>
      {items?.map((x) => {
        let isActive = false;
        if (x.url === router?.asPath) {
          isActive = true;
        }
        if (router?.asPath?.includes(x.url) && x.url !== '/') {
          isActive = true;
        }

        return (
          <ListItemButton
            key={x.key}
            href={x.url}
            className={cx(classes.root, {
              active: isActive,
            })}
            component="a"
          >
            {/* <ListItemIcon>{x.icon}</ListItemIcon> */}
            <ListItemText className={classes.listItemText} primary={t(x.key)} />
          </ListItemButton>
        );
      })}
    </Toolbar>
  );
};

export default MenuItems;
