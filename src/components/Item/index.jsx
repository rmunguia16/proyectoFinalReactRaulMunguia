import styles from "./item.module.css";
import { Link, useLocation } from "react-router-dom";

const Item = ({ item }) => {
  const location = useLocation();
  if (location.pathname == "/") {
    return (
      <Link to={`./${item.category}/${item.id}`}>
        <div className={styles.container} key={item.id}>
          <img src={item.img} alt={item.name} className={styles.img} />
          <div className={styles.info}>
            <h3 className={styles.text}>{item.name}</h3>
            <h4 className={styles.text}>${item.price}</h4>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={`./${item.id}`}>
        <div className={styles.container} key={item.id}>
          <img src={item.img} alt={item.name} className={styles.img} />
          <div className={styles.info}>
            <h3 className={styles.text}>{item.name}</h3>
            <h4 className={styles.text}>${item.price}</h4>
          </div>
        </div>
      </Link>
    );
  }
};

export default Item;
