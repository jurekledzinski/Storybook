import { dropZoneClassNames } from './styles/classnames';
import { DropZoneProps } from './types';
import { useControlDrop } from './hooks/useControlDrop';
import { useDropZone } from './hooks/useDropZone';

export const DropZone = ({ title, onDrop }: DropZoneProps) => {
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
    </div>
  );
};
