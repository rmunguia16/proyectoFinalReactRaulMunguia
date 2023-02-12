import React from "react";
import { Link } from "react-router-dom";

const NavButton = (texto) => {
  return (
    <Link to={`${texto.texto}`}>
      <button className="btn">{texto.texto}</button>
    </Link>
  );
};

export default NavButton;