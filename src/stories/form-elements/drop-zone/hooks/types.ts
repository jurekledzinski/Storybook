export type Event = React.DragEvent<HTMLDivElement>;

export type UseControlDropProps = {
  isEnter: boolean;
  onEnter: () => void;
  onLeave: () => void;
  refZone: React.RefObject<HTMLDivElement | null>;
};

export type UseSelectFilesProps = {
  accept?: string;
  multiple?: boolean;
  onSelectFiles?: (files: FileList) => void;
};
