import React from "react";
import Grid from "../Grid";
import styles from "./products.module.css";
import Filter from "../Filter";

const Products = ({ category }) => {
  return (
    <div className={styles.products}>
      <Filter />
      <Grid category={category} />
    </div>
  );
};

export default Products;
