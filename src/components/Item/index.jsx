import styles from "./item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item, deleteItem}) => {

  return (
    <div className={styles.container}>
      {/* <Link to={`${item.id}`} key={item.id}>
        <h2>{item.name}</h2>
      </Link>
      <p>${item.price}</p>
      <button onClick={() => {deleteItem(item.id);}}>Eliminar</button> */}
      Item
    </div>
  );
};

export default Item;