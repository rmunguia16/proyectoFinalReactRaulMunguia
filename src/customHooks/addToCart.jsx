import db from "../../db/firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

const addToCart = async (e,id) => {
  e.preventDefault();
  const newItem = {
    name: inputName,
    price: inputPrice,
    quantity: inputQuantity,
    id: id
  };
  const itemsCollectionRef = collection(db, "items");
  await addDoc(itemsCollectionRef, newItem); //agrega el item a la coleccion
  const data = await getDocs(itemsCollectionRef);
  setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //actualiza el estado de items
  setInputName("");
  setInputPrice("");
};

export default addToCart;
