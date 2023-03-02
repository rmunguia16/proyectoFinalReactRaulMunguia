import React from "react";
import Carousel from "./Carousel";
import styles from "./Home.module.css";
import { useContext } from "react";
import { ItemsContext } from "../../App";
import Item from "../Item";

const Home = () => {
  const itemList = useContext(ItemsContext);
  const items = itemList.map((item) => {
    return <Item item={item} key={item.id} />;
  });

  return (
    <>
    <h1 className={styles.brand}>¡Hero games!</h1>
    <div className={styles.CarouselContainer}>
        <Carousel />
    </div>
    <div className={styles.items}>
      {items}
    </div>
    </>
  );
};

export default Home;
