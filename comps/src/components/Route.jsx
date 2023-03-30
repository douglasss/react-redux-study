import { useEffect } from 'react';
import useNavigation from '../hooks/use-navigation';

export default function Route({ path, title, children }) {
  const { currentPath } = useNavigation();

  const isCurrentPath = currentPath === path;

  useEffect(() => {
    if (title && isCurrentPath) {
      document.title = title;
    }
  }, [currentPath, path]);

  return isCurrentPath && children;
}
