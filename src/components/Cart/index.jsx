import React from "react";
import CartItem from "./CartItem";
import { useState } from "react";
import styles from "./Cart.module.css";
import sonic from "../../assets/icons/sonic.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      {cart == null ? (
        cart.map((item) => {
          return <CartItem item={item} />;
        })
      ) : (
        <div className={styles.emptyCart}>
          <h1 className={styles.title}>Tu carrito esta vacio</h1>
          <div className={styles.dontWorry}>
            <img src={sonic} className={styles.img} alt="dont worry" />
            <h2 className={styles.text}>¡No te preocupes!<br/><br/>Vuelve al inicio y... <br/> !Seguro encuentras algo que te guste! <br/><br/>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
