import { dropZoneClassNames } from './utils/classNames';
import { DropZoneProps } from './types';
import { useControlDrop, useDropZone } from './hooks';
import { classNames } from '@src/stories/helpers';

export const DropZone = ({
  children,
  className,
  title,
  onDrop,
}: DropZoneProps) => {
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
      className={classNames(classes.zone, className)}
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
