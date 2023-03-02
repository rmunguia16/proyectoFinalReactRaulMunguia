import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./itemDetail.module.css";
import addToCart from "../../customHooks/addToCart";
import {
  ItemsContext,
  SetCartContext,
  CartTotalContext,
  SetItemsContext,
  SetCartTotalContext,
  SetLoadingContext,
  SetHighlightsContext,
} from "../../App";

const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const items = useContext(ItemsContext);
  const cartTotal = useContext(CartTotalContext);
  const setItems = useContext(SetItemsContext);
  const setCart = useContext(SetCartContext);
  const setHighlights = useContext(SetHighlightsContext);
  const setLoading = useContext(SetLoadingContext);
  const total = useContext(CartTotalContext);
  const setCartTotal = useContext(SetCartTotalContext);

  useEffect(() => {
    if (items[0] == undefined) {
      setLoading(true);
      getDbData(setItems, setCart, setHighlights, setLoading, setCartTotal);
    } else {
      setItem(items.find((item) => item.id == id));
    }
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.imgBox}>
        <img src={item.img} alt={item.name} />
      </div>

      <div className={styles.description}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>

      <div className={styles.container}>
        <h2>${item.price}</h2>

        <p>Disponible: {item.stock}</p>

        <div className={styles.amountDiv}>
          <button
            className={`${styles.amountBtn} ${styles.btn} ${styles.btnMinus}`}
            onClick={() => {
              quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
            }}
          >
            -
          </button>
          <div className={styles.amount}>
            <h3 className={styles.amountInput}>{quantity}</h3>
          </div>

          <button
            className={`${styles.amountBtn} ${styles.btn} ${styles.btnPlus}`}
            onClick={() => {
              quantity < item.stock
                ? setQuantity(quantity + 1)
                : setQuantity(item.stock);
            }}
          >
            +
          </button>
        </div>
        <Link to="/carrito">
        <button
          className={`${styles.btn} ${styles.btnCart}`}
          onClick={() => {
            addToCart(item.name, item.price, quantity, item.id, item.img, item.stock);
            setLoading(true);
            setCartTotal(parseInt(cartTotal)+parseInt(quantity));
          }}
        >
          Agregar
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
