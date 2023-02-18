import React from "react";
import Carousel from "./Carousel";
import styles from "./Home.module.css";
import { useContext } from "react";
import { ItemsContext } from "../../App";

const Home = () => {
  const items = useContext(ItemsContext);

  return (
    <div>
      <div className={styles.CarouselContainer}>
        <Carousel />
      </div>
      {items.map((item) => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
};

export default Home;
