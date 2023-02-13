import { Link } from "react-router-dom";

const Item = function ({ nombre, precio, stock }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <h4>{precio}</h4>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default Item;
