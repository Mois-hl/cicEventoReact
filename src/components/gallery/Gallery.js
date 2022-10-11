import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: require('../../assets/gallery/alejandro_22.png')
  },
  {
    original: require('../../assets/gallery/alvaro_22.png')
  },
  {
    original: require('../../assets/gallery/claudia_22.png')
  },
  {
    original: require('../../assets/gallery/dani_22.png')
  },
  {
    original: require('../../assets/gallery/daniel_22.png')
  },
  {
    original: require('../../assets/gallery/kevin_22.png')
  },
  {
    original: require('../../assets/gallery/lia_22_1.png')
  },
  {
    original: require('../../assets/gallery/luis_22.png')
  },
  {
    original: require('../../assets/gallery/misty_22.png')
  },
  {
    original: require('../../assets/gallery/ricky_22.png')
  },
  {
    original: require('../../assets/gallery/ronaldo_22.png')
  },
  {
    original: require('../../assets/gallery/siddhartha_22.png')
  },
  {
    original: require('../../assets/gallery/victor_22.png')
  }
];

export default function Gallery (){
  return(
    <>
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} autoPlay={false} showBullets={true} showIndex={true} />
    </>
  )
}