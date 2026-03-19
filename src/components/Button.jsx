
const Button = ({ className , children, ...props }) => {
  return <button className={className}>{children}</button>;
};

export default Button