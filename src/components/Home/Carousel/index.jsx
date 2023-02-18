import React, { useState } from "react";
import styles from "./Carousel.module.css";
import img1 from "/src/img/novedades/HogwartsL.jpg";
import img2 from "/src/img/novedades/Zelda-TotK.png";
import img3 from "/src/img/novedades/ns-Splatoon3.png";
import img4 from "/src/img/novedades/ps5-ragnarok.jpg";

const Carousel = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className={styles.carousel}>
      <section>
        <img src={img1} alt="img1" className={styles.img} />
        <img src={img2} alt="img2" className={styles.img} />
        <img src={img3} alt="img3" className={styles.img} />
        <img src={img4} alt="img4" className={styles.img} />
        <img src={img1} alt="img5" className={styles.img} />
      </section>

      <button
        className={`${styles.button_left} ${styles.button}`}
        onClick={() => {
          current == 1 ? setCurrent(5) : setCurrent(current - 1);
          console.log(current);
          
        }}
      >
        <svg
          width={"100"}
          height={"100"}
          viewBox={"0 0 100 100"}
          className={styles.svg}
        >
          <path d={"M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"}></path>
        </svg>
      </button>
      <button className={`${styles.button_right} ${styles.button}`}>
        <svg
          width={"100"}
          height={"100"}
          viewBox={"0 0 100 100"}
          className={styles.svg}
        >
          <path
            d={"M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"}
            transform={"translate(100, 100) rotate(180)"}
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
