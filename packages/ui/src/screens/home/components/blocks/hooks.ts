import * as R from 'ramda';
import { useCallback, useState } from 'react';
import {
  BlocksListenerSubscription,
  useBlocksListenerSubscription,
} from '@/graphql/types/general_types';
import type { BlocksState } from '@/screens/home/components/blocks/types';

const formatBlocks = (data: BlocksListenerSubscription) =>
  data.blocks.map((x) => {
    const proposerAddress = x?.validator?.validatorInfo?.operatorAddress ?? '';
    return {
      height: x.height,
      txs: x.txs ?? 0,
      hash: x.hash,
      timestamp: x.timestamp,
      proposer: proposerAddress,
    };
  }) ?? [];

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    items: [],
  });

  const handleSetState = useCallback((stateChange: (prevState: BlocksState) => BlocksState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    onData: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items: mergeByHeight(
          data.data.data ? formatBlocks(data.data.data) : [],
          prevState.items
        ).slice(0, 15),
      }));
    },
  });

  return {
    state,
  };
};

function mergeByHeight(blocks: BlocksState['items'], newBlocks: BlocksState['items']) {
  return R.uniqBy(R.prop('height'), [...blocks, ...newBlocks]);
}
