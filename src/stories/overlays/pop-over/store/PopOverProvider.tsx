import { PopoverContext } from './context';
import { PopoverProviderProps } from './types';
import { useClickOutside, useKeyMap } from '@src/stories/hooks';
import { useControlPopover, useTriggerRefs } from '../hooks';
import { useMemo } from 'react';

const PopoverProvider = ({ children }: PopoverProviderProps) => {
  const { mapKeys: mapRefs } = useKeyMap<HTMLElement>();
  const registerTriggers = useTriggerRefs();
  const controlPopover = useControlPopover();

  useClickOutside({
    onClick: () => controlPopover.onCloseAll(),
    onLoadRefs: () => [
      ...Object.entries(registerTriggers.triggers.current)
        .filter(([key]) => key.includes('root'))
        .map((i) => i[1]),
      ...Array.from(mapRefs.current.values()),
    ],
  });

  const values = useMemo(
    () => ({
      mapRefs,
      ...registerTriggers,
      ...controlPopover,
    }),
    [controlPopover, mapRefs, registerTriggers]
  );

  return <PopoverContext.Provider value={values}>{children}</PopoverContext.Provider>;
};

export default PopoverProvider;
