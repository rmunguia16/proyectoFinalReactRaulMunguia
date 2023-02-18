import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const NavButton = (texto) => {
  return (
    <Link to={`${texto.texto}`}>
      <button className={styles.btn}>{texto.texto}</button>
    </Link>
  );
};

export default NavButton;