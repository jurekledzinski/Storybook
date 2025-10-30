import { FilePreviewListProps } from '../types';

type Params = Pick<FilePreviewListProps, 'placement'>['placement'];

export type PreviewListClassNames = (params: Params) => string;

export type PreviewCardClassNames = (params: Params) => string;
