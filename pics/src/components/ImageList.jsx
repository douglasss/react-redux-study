import './ImageList.css';
import ImageShow from './ImageShow';

export default function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
}
