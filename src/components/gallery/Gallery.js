import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: require('../../assets/gallery/1.jpeg')
  },
  {
    original: require('../../assets/gallery/2.jpeg')
  },
  {
    original: require('../../assets/gallery/3.jpeg')
  },
  {
    original: require('../../assets/gallery/4.jpeg')
  },
  {
    original: require('../../assets/gallery/5.jpeg')
  }
];

export default function Gallery (){
  return(
    <>
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} autoPlay={false} showBullets={true} />
    </>
  )
}