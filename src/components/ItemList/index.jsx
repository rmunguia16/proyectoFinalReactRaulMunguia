import { useContext } from "react";
import Item from "../Item";
import styles from "./grid.module.css";
import { ItemsContext } from "../../App";

const Grid = ({ category }) => {
  const i = useContext(ItemsContext);
  const items = i.map((item) => {
    if (item.category.toLowerCase() == category.toLowerCase())
      return <Item item={item} key={item.id} />;
  });

  return (
    <div className={styles.content}>
      <h1>{category}</h1>
      <div className={styles.items}>{items}</div>
    </div>
  );
};

export default Grid;
