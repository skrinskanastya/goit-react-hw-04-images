import { useEffect } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
export const Modal = ({ img, onClose }) => {
  const handleKeyPress = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModal>
        <img src={img} alt="" />
      </StyledModal>
    </StyledOverlay>
  );
};
