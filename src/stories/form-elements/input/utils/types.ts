import { InputWrapperProps } from '@src/stories/form-elements/input';

type PickKeys = 'isError' | 'size' | 'variant' | 'disabled';

export interface BaseParmas extends Omit<InputWrapperProps, 'children'> {
  className?: string;
}

// export type InputWrapperClassNames = (params: BaseParmas) => {
//   inputWrapper: string;
//   startIcon: string;
//   endIcon: string;
//   statusIcon: string;
// };

export type InputWrapperClassNames = (params: BaseParmas) => string;

export type IconInputWrapperClassNames = (
  params: BaseParmas & { type: 'startIcon' | 'endIcon' }
) => string;

export type IconStatusClassNames = (params: BaseParmas) => string;

export type InputClassNames = (params: Pick<BaseParmas, PickKeys>) => {
  fieldset: string;
  input: string;
  legend: string;
  textarea: string;
};
