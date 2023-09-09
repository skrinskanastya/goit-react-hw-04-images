import { StyledItem } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ src, dataSrc, onImageClick }) => {
  return (
    <StyledItem onClick={()=>onImageClick(src)}>
      <img src={src} alt="" />
    </StyledItem>
  );
};