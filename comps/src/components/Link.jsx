import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

export default function Link({ to, children, className, activeClassName }) {
  const { currentPath, navigate } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    currentPath === to && activeClassName,
    className
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
