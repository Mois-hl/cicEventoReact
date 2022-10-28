import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery ({images}){
  return(
    <>
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} autoPlay={false} showBullets={true} showIndex={true} />
    </>
  )
}