import React, { HTMLAttributes } from 'react';

export interface DropZoneProps extends HTMLAttributes<HTMLDivElement> {
  accept?: string;
  children?: React.ReactNode;
  onSelectFiles?: (files: FileList) => void;
  multiple?: boolean;
}
