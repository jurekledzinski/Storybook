export type UseWindowResizeProps = {
  onResize: (element: HTMLElement) => void;
};

export type UseResizeObserverProps<T extends HTMLDivElement = HTMLDivElement> =
  {
    ref: React.RefObject<T> | null;
    onResize: (rect: DOMRect) => void;
  };
