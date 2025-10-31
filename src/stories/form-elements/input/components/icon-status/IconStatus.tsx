import { Icon } from '@src/stories/graphics/icon';
import { iconStatusClassNames } from '../..';
import { IconStatusProps } from './types';
import { useInputWrapper } from '../../store/useInputWrapper';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export const IconStatus = ({
  icons = [faExclamationCircle, faCheckCircle],
}: IconStatusProps) => {
  const ctx = useInputWrapper();
  const classNames = iconStatusClassNames(ctx);

  if (ctx.isPending || ctx.isError === undefined) return null;

  return (
    <span className={classNames}>
      <Icon icon={ctx.isError ? icons[0] : icons[1]} size="1x" />
    </span>
  );
};
