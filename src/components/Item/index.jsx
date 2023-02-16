import styles from "./item.module.css";
import { Link } from "react-router-dom";


const Item = ({ item }) => {
  const url = `/src/img/${item.category}/${item.type}/${item.sku}.jpg`;
  return (
    <div className={styles.container} key={item.id}>
      {/* <Link to={`${item.id}`} key={item.id}>
        <h2>{item.name}</h2>
      </Link>
      <p>${item.price}</p>
    */}
      <img src={url} alt={item.name} className={styles.img}/>
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <p>{item.category}</p>
      <button className={styles.btn} onClick={() => {agregar(item.id);}}>Agregar</button> 

    </div>
  );
};

export default Item;
