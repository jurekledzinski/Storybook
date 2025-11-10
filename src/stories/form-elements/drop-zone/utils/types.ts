type Params = {
  isEnter: boolean;
  className?: string;
};

export type DropZoneClassNames = (params: Params) => string | undefined;
