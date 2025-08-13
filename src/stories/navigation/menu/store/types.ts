import { OnKeyArrow, OnKeyArrowNested, OnKeyPress } from '@src/stories/hooks';

export type ContextMenu = {
  mapPlacements: React.RefObject<Map<string, string>>;
  onSelectItem?: (id: string) => void;
  onKeyArrow?: OnKeyArrow;
  onKeyPress?: OnKeyPress;
  onKeyArrowNested?: OnKeyArrowNested;
};

export type MenuProviderProps = {
  children: React.ReactNode;
  onSelectItem?: (id: string) => void;
};
