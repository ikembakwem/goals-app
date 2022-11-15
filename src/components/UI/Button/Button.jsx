import './Button.css';

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
