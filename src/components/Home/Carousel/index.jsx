import React from "react";
import styles from "./Carousel.module.css";
import Arrow from "./Arrow";

const Carousel = () => {
  return (
      <div className={styles.carousel}>
        <Arrow condition={true} />
        <Arrow condition={false}/>
      </div>
  );
};

export default Carousel;
