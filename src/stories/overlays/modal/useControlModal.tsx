import { useMemo, useState } from 'react';

export const useControlModal = () => {
  const [showModal, setShowModal] = useState(false);

  return useMemo(
    () => ({
      showModal,
      onClose: () => setShowModal(false),
      onOpen: () => setShowModal(true),
    }),
    [showModal]
  );
};
