import React from "react";
import db from "../../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const getDbData = async (setItems, setCart, setHighlights, setLoading, setCartTotal) => {
  let dbNames = ["items", "highlights", "cart"];
  dbNames.forEach(async (dbName) => {
    const ref = collection(db, dbName);
    const dataCollection = await getDocs(ref);
    const data = dataCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    if (dbName === "items") {
      setItems(data);
      console.log(data);
    } else if (dbName === "highlights") {
      setHighlights(data);
      console.log(data);
    } else if (dbName === "cart") {
      setCart(data);
      if (data[0].name != undefined) {
        setCartTotal(data);
      }
      console.log(data);
    }
  });
  setLoading(false);
};
export default getDbData;
