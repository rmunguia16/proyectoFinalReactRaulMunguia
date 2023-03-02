import React from "react";
import CartItem from "./CartItem";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Cart.module.css";
import sonic from "../../assets/icons/sonic.png";
import db from "/db/firebase-config.js";
import { deleteDoc, doc } from "firebase/firestore";
import Loading from "../Loading";
import getAll from "../../customHooks/getAll";
import {
  ItemsContext,
  CartContext,
  TotalContext,
  SetItemsContext,
  SetCartContext,
  SetCartTotalContext,
  SetLoadingContext,
  SetHighlightsContext,
  SetTotalContext,
} from "../../App";

const Cart = () => {
  const { id } = useParams();
  const items = useContext(ItemsContext);
  const cart = useContext(CartContext);
  const setCart = useContext(SetCartContext);
  const setHighlights = useContext(SetHighlightsContext);
  const setLoading = useContext(SetLoadingContext);
  const setCartTotal = useContext(SetCartTotalContext);
  const setTotal = useContext(SetTotalContext);
  const total = useContext(TotalContext);
  const setItems = useContext(SetItemsContext);
  let amount = 0;

  const vaciarCarro = async (id) => {
    const docId = doc(db, "cart", id);
    await deleteDoc(docId);
  };

  useEffect(() => {
    if (cart == undefined) {
      getAll(setLoading, setCartTotal, setCart, setItems, setHighlights);
    }
    cart.map((item) => {
      if (Object.keys(item).length > 1) {
        console.log(item);
        amount = amount + item.quantity * item.price;
      }
    });
    setTotal(amount / 2);
  }, []);

  return (
    <div className={styles.emptyCart}>
      {cart.length > 1 ? (
        <>
          {cart.map((item) => {
            if (Object.keys(item).length > 1) {
              return <CartItem item={item} />;
            }
          })}
          <div className={styles.total}>
            <h2>Total:</h2>
            <p className={styles.text}>${total}</p>
            <button
              className={`${styles.btn} ${styles.btnDel}`}
              onClick={() => {
                setLoading(true)
                cart.map((item) => {
                  if (Object.keys(item).length > 1) {
                    vaciarCarro(item.id);
                  }
                });
                getAll(setLoading, setCartTotal, setCart, setItems, setHighlights);
              }}
            >
              Vaciar Carrito
            </button>
            <button
              className={`${styles.btn} ${styles.btnBuy}`}
              onClick={() => {
                setLoading(true)
                cart.map((item) => {
                  if (Object.keys(item).length > 1) {
                    vaciarCarro(item.id);
                    console.log("Carrito:" + item);
                  }
                });
                getAll(setLoading, setCartTotal, setCart, setItems, setHighlights);
                alert("¡Felicidades! Tu pedido está siendo preparado")
              }}
            >
              Comprar
            </button>
            
          </div>
        </>
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
