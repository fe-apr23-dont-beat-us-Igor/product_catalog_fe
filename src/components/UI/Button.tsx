const Button = ({ ...atributes }) => {
  return (
    <button  {...atributes}>
      <p className="button-primary__text text">Add to card</p>
    </button>
  );
};

export default Button;
