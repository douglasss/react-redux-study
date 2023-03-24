export default function ImageShow({ image }) {
  return <img alt={image.urls.alt_description} src={image.urls.small} />;
}
