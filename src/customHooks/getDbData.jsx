import React from "react";
import db from "../../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const getDbData = async (dbName, setDB, setLoading, setCartTotal) => {
  const ref = collection(db, dbName);
  const dataCollection = await getDocs(ref);
  const data = dataCollection.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  setDB(data);
  if (dbName == "cart") {
    let sum = 0;
    data.forEach((item) => {
      if (Object.keys(item).includes("quantity")) {
        sum += item.quantity;
      }
    });
    setCartTotal(sum);
  }
  setLoading(false);
};
export default getDbData;
