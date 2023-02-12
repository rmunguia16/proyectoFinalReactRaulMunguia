import React from "react";
import CartWidget from "../CartWidget";
import NavButton from "./ButtonBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ carrito }) => {
  return (
    <nav className={styles.topPage}>
      <div className={styles.topPage__Up}>
        <Link to="/">
          <h1 className="brand">HeroGames</h1>
        </Link>
        <CartWidget carrito={carrito} />
      </div>
      <div className={styles.topPage__Down}>
        <NavButton texto="Videojuegos" />
        <NavButton texto="Juegos de Mesa" />
        <NavButton texto="TCG" />
        <NavButton texto="Comics y Mangas" />
        <NavButton texto="Coleccionables" />
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
