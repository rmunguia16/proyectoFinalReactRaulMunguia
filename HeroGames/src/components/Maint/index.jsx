import React from "react";
import mario from "../../assets/icons/mario-builder.png";
import styles from "./Maint.module.css";

const Mantenimiento = () => {
  return (
    <div className={styles.container}>
      <h1 style={{color:'black'}}>En Mantenimiento</h1>
      <img src={mario} alt="Mantenimiento"/>
    </div>
  );
};

export default Mantenimiento;
