import { ContextMenu } from '@src/stories/navigation/menu/store';
import { ContextPopOver } from '@src/stories/overlays/pop-over/store';
import { Placement } from '@src/stories/overlays/pop-over';

type MenuContext = Omit<ContextMenu, 'onSelectItem'>;
type PopOverContext = Pick<ContextPopOver, 'onCloseAll' | 'open' | 'mapRefs'>;

export interface UseEnterExitProps extends MenuContext, PopOverContext {
  panelRef: React.RefObject<HTMLDivElement | null>;
  panelId: string;
  placement?: Placement;
}
