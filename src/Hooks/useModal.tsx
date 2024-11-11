import { ReactNode, useCallback, useState } from 'react';
import Modal from '../Components/modal';

interface ModalWrapperProps {
  onClose?: () => void,
  children: ReactNode;
}

const useModal = ({ useBlur = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ModalWrapper = ({ children }: ModalWrapperProps) => (
    <Modal onClose={useBlur ? close : undefined}>{children}</Modal>
  );

  return {
    Modal: isOpen ? ModalWrapper : () => undefined,
    open,
    close,
    isOpen,
  };
};

export default useModal;
