import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import db from "../db/firebase-config.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Mantenimiento from "./components/Maint";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Footer from "./components/Footer";
import data from "./data.json";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.css";
import Cart from "./components/Cart";
import Loading from "./components/Loading";

function App() {
  const [items, setItems] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const itemsCollectionRef = collection(db, "items");
  const highlightsCollectionRef = collection(db, "highlights");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getItem = () => {
      getDocs(itemsCollectionRef).then(itemsCollection => {
        setItems(
          itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        console.log(items);
    }) ;
  };

  const getHighlights = () => {
    getDocs(highlightsCollectionRef).then(highlightsCollection => {
      setHighlights(
        highlightsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
      console.log(highlights);
      setLoading(false);
  }) ;
};

  useEffect(() => {
    getItem();
    getHighlights();
  }, []);


  return (
    <>
      {loading ? (
        <div className={styles.app}>
          <NavBar />
          <Loading />
          <Footer />
        </div>
      ) : (
        <div className={styles.app}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videojuegos" element={<h1>Videojuegos</h1>} />
            <Route
              path="/videojuegos/:name"
              element={<ItemDetail data={data} />}
            />
            <Route
              path="/juegos De Mesa"
              element={<Mantenimiento titulo={"Juegos de Mesa"} />}
            />
            <Route path="/tcg" element={<h1>TCG</h1>} />
            <Route path="/tcg/:name" element={<ItemDetail data={data} />} />
            <Route path="/comics y mangas" element={<Mantenimiento />} />
            <Route
              path="/comics y mangas/:name"
              element={<ItemDetail data={data} />}
            />
            <Route path="/coleccionables" element={<h1>Coleccionables</h1>} />
            <Route
              path="/coleccionables/:name"
              element={<ItemDetail data={data} />}
            />
            <Route path="/Carrito" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
