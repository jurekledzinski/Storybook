import { dropZoneClassNames } from './utils/classNames';
import { DropZoneProps } from './types';
import { useControlDrop, useDropZone } from './hooks';

export const DropZone = ({ children, title, onDrop }: DropZoneProps) => {
  const { isEnter, refZone, onEnter, onLeave } = useDropZone();
  const { onDragEnter, onDragOver, onDragLeave } = useControlDrop({
    isEnter,
    onEnter,
    onLeave,
    refZone,
  });

  const classes = dropZoneClassNames(isEnter);

  return (
    <div
      className={classes.zone}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDropCapture={() => onLeave()}
      ref={refZone}
    >
      <h4 className={classes.title}>{title}</h4>
      {children}
    </div>
  );
};
