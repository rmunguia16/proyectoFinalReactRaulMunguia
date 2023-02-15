import React from "react";
import styles from "./Arrow.module.css";

const Arrow = (condition) => {
  return (
    <>
      <button className={styles.button_left}>
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
      
    <button className={styles.button_right}>
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
    </>
  );
};

export default Arrow;
