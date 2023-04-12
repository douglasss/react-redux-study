import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import { Album } from '../types/album';
import Button from './Button';
import PhotosListItem from './PhotosListItem';
import { Skeleton } from './Skeleton';

interface Props {
  album: Album;
}
export default function PhotosList({ album }: Props) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data?.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="nx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}
