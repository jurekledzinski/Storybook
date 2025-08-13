import { MenuPanelProps } from '../../types';

export interface UseMenuPanelProps extends MenuPanelProps {
  open: Record<string, boolean>;
  panelRef: React.RefObject<HTMLDivElement>;
  getTriggerRect: (id: string) => DOMRect;
  refreshTriggerRect: (id: string) => void;
}
