import { API } from '@orderly.network/types';
import { Tabs } from '@radix-ui/themes';
import { FunctionComponent } from 'react';

import { Positions } from './Positions';

export const OrderTabs: FunctionComponent<{ symbol: API.Symbol }> = ({ symbol }) => {
  return (
    <Tabs.Root defaultValue="positions" className="flex-1">
      <Tabs.List>
        <Tabs.Trigger value="positions">Positions</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="positions">
        <Positions symbol={symbol} />
      </Tabs.Content>
    </Tabs.Root>
  );
};