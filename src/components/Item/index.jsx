import styles from "./item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className={styles.container} key={item.id}>
      {/* <Link to={`${item.id}`} key={item.id}>
        <h2>{item.name}</h2>
      </Link>
      <p>${item.price}</p>
    */}
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <img src={item.image} alt={item.name} />
      <button onClick={() => {deleteItem(item.id);}}>Eliminar</button> 
    </div>
  );
};

export default Item;
