type buttonProps = {
  children: string;
  className: string;
};

const Button = (props: buttonProps) => {
  const { children, className } = props;
  return (
    <button
      className={`font-semibold py-2 px-4 cursor-pointer rounded-lg text-xs ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
