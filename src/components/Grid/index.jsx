import { useContext } from "react";
import Item from "../Item";
import styles from "./grid.module.css";
import { ItemsContext } from "../../App";

const Grid = () => {
const i = useContext(ItemsContext);

  return (
    <>
      <div className={styles.items}>
        <h1>{}</h1>
        {i.map((item) => {
          return (
              <Item item={item} key={item.id}/>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
