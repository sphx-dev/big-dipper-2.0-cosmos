import AvatarName from '@/components/avatar_name';
import Timestamp from '@/components/Timestamp';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/home/components/blocks/components/desktop/styles';
import { columns } from '@/screens/home/components/blocks/components/desktop/utils';
import type { ItemType } from '@/screens/home/components/blocks/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import styled from '@emotion/styled';

type BlockRowProps = {
  item: ItemType;
};

const variants: Variants = {
  initial: {
    height: 0,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'inset(0 50 0 50)',
  },
  animate: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    clipPath: 'inset(0 0 0 0)',
  },
  exit: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    marginTop: [50, 60],
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const comeDownVariants: Variants = {
  initial: {
    top: -375,
  },
  animate: {
    top: 0,
  },
  exit: {
    top: 0,
  },
};

const BlockRow: FC<BlockRowProps> = ({ item }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.proposer);

  const formattedData = {
    height: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(item.height)} className="value">
        {numeral(item.height).format('0,0')}
      </Link>
    ),
    txs: numeral(item.txs).format('0,0'),
    time: <Timestamp timestamp={item.timestamp} />,
    proposer: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
    hash: getMiddleEllipsis(item.hash, {
      beginning: 6,
      ending: 5,
    }),
  };
  return (
    <TableRow>
      {columns.map((column) => {
        const { key, align } = column;
        return (
          <TableCell key={`${item.hash}-${key}`} align={align}>
            <CellDataWrapper>{formattedData[key as keyof typeof formattedData]}</CellDataWrapper>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const CellDataWrapper = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`;

type DesktopProps = {
  className?: string;
  items: ItemType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { t } = useAppTranslation('blocks');
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)} style={{ overflow: 'auto hidden' }}>
      <Table
        className={classes.table}
        style={{
          display: 'block',
          height: '350px',
        }}
      >
        <TableHead style={{ zIndex: 10, backgroundColor: 'white', position: 'relative' }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} align={column.align}>
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <motion.tbody
          style={{ position: 'relative', zIndex: 1 }}
          key={items.map((x) => x.hash).join('')}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={comeDownVariants}
          transition={{ duration: 1.5 }}
        >
          {items.map((row) => (
            <BlockRow key={row.hash} item={row} />
          ))}
        </motion.tbody>
      </Table>
    </div>
  );
};

export default Desktop;
