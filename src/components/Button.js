import "./Button.css";

const Button = (props) => {
  return (
    <>
      <button type="submit" onClick={props.handleClick}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
