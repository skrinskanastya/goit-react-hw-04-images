import { useEffect } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
export const Modal = ({ img, onClose }) => {
  useEffect(() => {
    const handleModalCloseByEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleModalCloseByEsc);
    };
  }, [onClose]);

  const handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModal>
        <img src={img} alt="" />
      </StyledModal>
    </StyledOverlay>
  );
};
