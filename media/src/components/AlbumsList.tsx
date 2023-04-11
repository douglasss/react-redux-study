import { User } from '../types/user';

interface Props {
  user: User;
}

export default function AlbumsList({ user }: Props) {
  return <div>Albums for {user.name}</div>;
}
