import { FileMimeType, MaxSize } from '@src/stories/types';
import { OnError } from '../types';

export type UseValidateFilesProps = {
  onError: OnError;
  allowTypes: FileMimeType[];
  maxAmount?: number;
  maxSize?: MaxSize;
};
