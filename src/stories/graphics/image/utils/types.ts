import { Loading } from '../components';

type ParamsContainer = {
  isLoading: boolean;
  className?: string;
  loader?: Loading;
};

export type ImageContainerClassNames = (params: ParamsContainer) => string;

export type ImageClassNames = (className?: string) => string;
