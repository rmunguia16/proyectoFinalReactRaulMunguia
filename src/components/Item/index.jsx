import styles from "./item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const url = `/src/img/${item.category}/${item.type}/${item.sku}.jpg`;

  return (
    <Link to={`./${item.id}`}>
      <div className={styles.container} key={item.id} >
        <img src={url} alt={item.name} className={styles.img} />
        <div className={styles.info}>
          <h3 className={styles.text}>{item.name}</h3>
          <h4 className={styles.text}>${item.price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Item;
