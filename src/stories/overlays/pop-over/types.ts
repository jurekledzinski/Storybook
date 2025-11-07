import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { HTMLAttributes } from 'react';

type PickKeys =
  | 'classNames'
  | 'mountOnEnter'
  | 'onEnter'
  | 'onEntering'
  | 'onEntered'
  | 'onExit'
  | 'onExiting'
  | 'onExited'
  | 'timeout'
  | 'unmountOnExit';

type TransitionProps = Pick<CSSTransitionProps<HTMLDivElement>, PickKeys>;

export type Alignment = 'start' | 'end';
export type BasePlacement = 'top' | 'bottom' | 'left' | 'right';

export type Placement = `${BasePlacement} ${Alignment}` | BasePlacement;

export type PopoverProps = HTMLAttributes<HTMLDivElement> &
  TransitionProps & {
    open: boolean;
  };
