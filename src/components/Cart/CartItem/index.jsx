import React, { useEffect, useContext } from "react";
import styles from "./CartItem.module.css";
import db from "/db/firebase-config.js";
import { Link } from "react-router-dom";
import { getDoc, deleteDoc, doc } from "firebase/firestore";
import { TotalContext, SetTotalContext } from "../../../App";

const CartItem = (item) => {
  const deleteItem = async (id) => {
    const docId = doc(db, "cart", id);
    await deleteDoc(docId);
    window.location.reload();
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__imageContainer}>
        <img
          src={item.item.img}
          alt={item.item.name}
          className={styles.cartItem__image}
        />
      </div>
      <div className={styles.cartItem__info}>
        <h2 className={styles.cartItem__name}>{item.item.name}</h2>
      </div>

      <h3 className={styles.cartItem__quantity}>
        Cantidad: {item.item.quantity}
      </h3>

      <div className={styles.cartItem__actions}>
        <p className={styles.cartItem__price}>
          ${item.item.price * item.item.quantity}
        </p>
        <button
          className={`${styles.btn} ${styles.btnDel}`}
          onClick={() => {
            deleteItem(item.item.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
