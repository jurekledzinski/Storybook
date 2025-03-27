import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Option } from '../../types';
import { selectPanelClassNames } from '../../utils/classNames';
import { SelectPanelProps } from './types';
import { useRef } from 'react';
import { useSelect } from '../../context/useSelect';
import { useSetPositionPanel } from '../../hooks/useSetPositionPanel';

export const SelectPanel = <T extends Option = Option>({
  children,
}: SelectPanelProps<T>) => {
  const panelRef = useRef(null);
  const { position, gap, items, isOpen } = useSelect();

  const { w, x, y } = useSetPositionPanel({
    gap: gap ?? 0,
    position,
    ref: panelRef,
    isOpen,
  });

  const classes = selectPanelClassNames();

  const renderChildren =
    typeof children === 'function'
      ? items?.map((item) => children(item as T))
      : children;

  return ReactDOM.createPortal(
    <CSSTransition
      in={isOpen}
      nodeRef={panelRef}
      timeout={300}
      classNames={classes.selectPanel}
      unmountOnExit
    >
      <div
        className={classes.selectPanelElement}
        ref={panelRef}
        style={{
          top: y,
          left: x,
          width: w,
        }}
      >
        {renderChildren}
      </div>
    </CSSTransition>,
    document.body
  );
};
