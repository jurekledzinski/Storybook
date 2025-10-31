import { iconInputWrapperClassNames } from '../..';
import { Loader } from '@src/stories/feedbacks/loader';
import { useInputWrapper } from '../../store/useInputWrapper';

export const InputLoader = () => {
  const ctx = useInputWrapper();
  const classNames = iconInputWrapperClassNames({ type: 'endIcon', ...ctx });

  if (!ctx.isPending) return null;

  return (
    <div className={classNames}>
      <Loader size={ctx.size} />
    </div>
  );
};
