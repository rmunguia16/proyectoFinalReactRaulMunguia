import Form from "../Form";
import Item from "../Item";
import styles from "./grid.module.css";

const Grid = ({ items, setItems, deleteItem }) => {
  return (
    <>
      <Form setItems={setItems} />
      <div className={styles.items}>
        {items.map((item) => {
          return (
              <Item item={item} deleteItem={deleteItem} key={item.id}/>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
