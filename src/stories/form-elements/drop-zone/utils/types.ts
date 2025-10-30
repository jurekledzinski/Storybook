type Params = {
  isEnter: boolean;
  className?: string;
};

export type DropZoneClassNames = (params: Params) => {
  title: string;
  zone: string;
};
