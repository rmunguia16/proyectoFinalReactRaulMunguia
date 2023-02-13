import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/icons/car.png";
import styles from "./CartWidget.module.css";

const CartWidget = ({ carrito }) => {
  return (
    <Link to="/Carrito">
      <div className={styles.container}>
        <h2 className={styles.number}>{carrito == null ? "0" : carrito} </h2>
        <img src={cart} className={styles.cart} alt="carrito" />
      </div>
    </Link>
  );
};

export default CartWidget;
