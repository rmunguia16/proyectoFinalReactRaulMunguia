import { useLocation, useParams } from "react-router-dom";
import React from "react";


const ItemDetail = ({data}) => {
  const { name } = useParams();
  const category = useLocation().pathname.split("/")[1];
  const items = data[category];
  const item = items.find((item) => item.name === name);
  return (
    <li>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.score}</p>
    </li>
  );
};

export default ItemDetail;