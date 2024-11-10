import { ReactNode, useCallback, useState } from 'react';
import Modal from '../Components/modal';

const useModal = ({ useBlur = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    Modal: isOpen
      ? ({ children }: { children: ReactNode }) => (
          <Modal onClose={useBlur ? close : undefined}>{children}</Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
