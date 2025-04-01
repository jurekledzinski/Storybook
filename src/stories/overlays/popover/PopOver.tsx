import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { getChildren } from './utils/getChildren';
import { Option } from './types';
import { popOverClassNames } from './utils/classNames';
import { PopOverProps } from './types';
import { usePopOver } from './context/usePopOver';
import { useRef } from 'react';
import { useSetPositionPopOver } from './hooks/useSetPositionPopOver';

export const PopOver = <T extends Option = Option>({
  children,
}: PopOverProps<T>) => {
  const panelRef = useRef(null);
  const { gap, items, isOpen, parentRef } = usePopOver();

  const { w, x, y } = useSetPositionPopOver({
    gap: gap ?? 0,
    parentRef,
    panelRef,
    isOpen,
  });

  const classes = popOverClassNames();
  const renderChildren = getChildren(children, items as T[]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={isOpen}
      nodeRef={panelRef}
      timeout={300}
      classNames={classes.popoverPanel}
      unmountOnExit
    >
      <div
        className={classes.popoverElement}
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
