import className from 'classnames';

const finalClassName = className('px-3', 'py-1.5', 'bg-blue-500');

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500': primary,
      'border-gray-900': secondary,
      'border-green-500': success,
      'border-yellow-400': warning,
      'border-red-500': danger,
      'bg-blue-500': primary && !outline,
      'bg-gray-900': secondary && !outline,
      'bg-green-500': success && !outline,
      'bg-yellow-400': warning && !outline,
      'bg-red-500': danger && !outline,
      'text-white':
        !outline && (primary || secondary || success || warning || danger),
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-600': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error('Only one variation can be true');
    }
  },
};
