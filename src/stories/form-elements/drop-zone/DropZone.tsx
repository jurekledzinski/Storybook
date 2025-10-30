import { dropZoneClassNames } from './utils/classNames';
import { DropZoneProps } from './types';
import { forwardRef, useImperativeHandle } from 'react';
import { useControlDrop, useDropZone, useSelectFiles } from './hooks';

export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(
  ({ accept, children, className, multiple, onDrop, onSelectFiles }, ref) => {
    const { isEnter, refZone, onEnter, onLeave } = useDropZone();
    const { onDragEnter, onDragOver, onDragLeave } = useControlDrop({
      isEnter,
      onEnter,
      onLeave,
      refZone,
    });

    const onClick = useSelectFiles({ accept, multiple, onSelectFiles });

    useImperativeHandle(ref, () => refZone.current!);

    const classNames = dropZoneClassNames({ className, isEnter });

    return (
      <div
        className={classNames}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onDropCapture={() => onLeave()}
        ref={refZone}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

DropZone.displayName = 'DropZone';
