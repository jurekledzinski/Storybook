import { InputWrapperProps } from '@src/stories/form-elements/input';

type PickKeys = 'isError' | 'size' | 'variant' | 'disabled';

export type BaseParmas = Omit<InputWrapperProps, 'children'>;

type InputWrapperParams = BaseParmas & { type: 'startIcon' | 'endIcon' };

type CommonParams = Pick<BaseParmas, PickKeys>;

type CommonTypeParams = Pick<BaseParmas, PickKeys> & {
  type: 'input' | 'legend' | 'textarea';
};

export type InputWrapperClassNames = (params: BaseParmas) => string;

export type IconInputWrapperClassNames = (params: InputWrapperParams) => string;

export type InputBaseClassNames = (params: CommonParams) => {
  fieldset: string;
  legend: string;
};

export type InputClassNames = (params: CommonParams) => string;

export type TextareaClassNames = (params: CommonParams) => string;

export type CommonInputClassNames = (params: CommonTypeParams) => string;
