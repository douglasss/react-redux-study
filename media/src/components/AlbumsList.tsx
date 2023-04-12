import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import { User } from '../types/user';
import { Skeleton } from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

interface Props {
  user: User;
}

export default function AlbumsList({ user }: Props) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums </div>;
  } else {
    content = data?.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in the album
        </ExpandablePanel>
      );
    });
  }
  return (
    <div>
      <div>
        Albums for {user.name}
        <Button onClick={handleAddAlbum}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
