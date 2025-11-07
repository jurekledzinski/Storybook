export type ContextPopover = {
  getTriggerRect: (id: string) => DOMRect;
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  onClose: (id: string) => void;
  onCloseAll: () => void;
  onToggle: (id: string) => void;
  open: Record<string, boolean>;
  setTrigger: (node: HTMLElement | null, id: string) => void;
  triggers: React.RefObject<Record<string, HTMLElement | null>>;
  updateTriggerRect: (id: string) => void;
};

export type PopoverProviderProps = {
  children: React.ReactNode;
};
