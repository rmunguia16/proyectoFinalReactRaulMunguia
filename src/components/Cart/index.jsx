import React from "react";
import CartItem from "./CartItem";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Cart.module.css";
import sonic from "../../assets/icons/sonic.png";
import db from "../../../db/firebase-config.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Loading from "../Loading";
import getAll from "../../customHooks/getAll";
import {
  ItemsContext,
  CartContext,
  SetItemsContext,
  SetCartContext,
  SetCartTotalContext,
  SetLoadingContext,
  SetHighlightsContext,
} from "../../App";

const Cart = () => {
  const { id } = useParams();
  const items = useContext(ItemsContext);
  const cart = useContext(CartContext);
  const setCart = useContext(SetCartContext);
  const setHighlights = useContext(SetHighlightsContext);
  const setLoading = useContext(SetLoadingContext);
  const setCartTotal = useContext(SetCartTotalContext);
  const setItems = useContext(SetItemsContext);

  useEffect(() => {
    if (cart == undefined) {
      getAll(setLoading, setCartTotal, setCart, setItems, setHighlights);
    }
  }, []);

  /*   const deleteItem = async (id) => {
    const itemDocRef = doc(db, "items", id);
    await deleteDoc(itemDocRef);
    getItem();
  }; */

  return (
    <div className={styles.emptyCart}>
      {cart.length > 1 ? (
        cart.map((item) => {
          if (Object.keys(item).length > 1) {
          return <CartItem item={item} />;
          }
        })
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Cart;
