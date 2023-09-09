import { StyledItem } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ src, dataSrc, onImageClick }) => {
  return (
    <StyledItem onClick={()=>(src)}>
      <img src={src} alt="" />
    </StyledItem>
  );
};
// data-src={dataSrc}
