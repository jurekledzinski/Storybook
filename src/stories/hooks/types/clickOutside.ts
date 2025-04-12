export type UseCloseOnClickOutsideProps = {
  onClick: () => void;
  onLoadRefs: () => Record<string, React.RefObject<Node>>;
};
