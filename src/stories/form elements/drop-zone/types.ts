import React from 'react';

export type DropZoneProps = {
  children?: React.ReactNode;
  title: string;
  onDrop?: React.DragEventHandler<HTMLDivElement>;
};

export type UseControlDropProps = {
  isEnter: boolean;
  onEnter: () => void;
  onLeave: () => void;
  refZone: React.RefObject<HTMLDivElement>;
};

export type Event = React.DragEvent<HTMLDivElement>;
