import React from "react";
import mario from "../../assets/icons/mario-builder.png";
import styles from "./Mantenimiento.module.css";

const Mantenimiento = () => {
  return (
    <div>
      <h1 className={styles.container}>En Mantenimiento</h1>
      <img src={mario} alt="Mantenimiento"/>
    </div>
  );
};

export default Mantenimiento;
