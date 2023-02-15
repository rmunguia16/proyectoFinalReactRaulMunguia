import React from "react";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import sonic from "../../assets/icons/sonic.png";
import db from "../../../db/firebase-config.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Loading from "../Loading";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const cartCollectionRef = collection(db, "cart");
  const [loading, setLoading] = useState(true);

  const getCart = () => {
    getDocs(cartCollectionRef).then((cartCollection) => {
      setCart(
        cartCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(cart);
      setLoading(false);
    }).catch((error) => {});
  };

  useEffect(() => {
    getCart();
  }, []);

  const deleteItem = async (id) => {
    const itemDocRef = doc(db, "items", id);
    await deleteDoc(itemDocRef);
    getItem();
  };

  return (
    <>
      {loading ? (
        <div className={styles.app}>
          <Loading />
        </div>
        ) : (
              <div>
                {cart == null ? (
                  cart.map((item) => {
                    return <CartItem item={item} />;
                  })
                ) : (
                  <div className={styles.emptyCart}>
                    <div className={styles.titleDiv}>
                      <h1 className={styles.title}>Tu carrito esta vacio</h1>
                    </div>
                    <div className={styles.dontWorry}>
                      <img src={sonic} className={styles.img} alt="dont worry" />
                      <h2 className={styles.text}>
                        ¡No te preocupes!
                        <br />
                        <br />
                        Vuelve al inicio y... <br /> !Seguro encuentras algo que te guste!{" "}
                        <br />
                        <br />
                      </h2>
                    </div>
                  </div>
                )}
              </div>
      )}
    </>
  );
}

export default Cart;
