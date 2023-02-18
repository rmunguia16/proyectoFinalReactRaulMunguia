import db from "../../db/firebase-config";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";

const addToCart = async (inputName, inputPrice, inputQuantity, id, img) => {
  const ref = collection(db, "cart");
  const cartContent = await getDocs(ref);
  let flag = false;
  let doc = {};
  const newItem = {
    name: inputName,
    price: inputPrice,
    quantity: inputQuantity,
    id: id,
    img: img,
  };
  console.log(cartContent.docs);
  for (let i = 0; cartContent.docs.length > i; i++) {
    if (cartContent.docs[i].data().id == id) {
      flag = true;
      doc = cartContent.docs[i].data();
      var docRef = cartContent.docs[i].ref;
    }
  }
  flag
    ? await updateDoc(docRef, { quantity: doc.quantity + inputQuantity })
    : await addDoc(ref, newItem);
  window.location = `/carrito`;
};

export default addToCart;
