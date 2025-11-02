import { iconInputWrapperClassNames } from '../../utils';
import { Loader } from '@src/stories/feedbacks/loader';
import { useInputWrapper } from '../../store/useInputWrapper';

export const InputLoader = () => {
  const ctx = useInputWrapper();
  const classNames = iconInputWrapperClassNames({ ...ctx, type: 'endIcon' });

  if (!ctx.isPending) return null;

  return (
    <div className={classNames}>
      <Loader size={ctx.size} position="element" />
    </div>
  );
};
