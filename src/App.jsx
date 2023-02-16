import { createContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Mantenimiento from "./components/Maint";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.css";
import Cart from "./components/Cart";
import Loading from "./components/Loading";
import getDbData from "./customHooks/getDbData";
import Grid from "./components/Grid";
import Products from "./components/Products";

export const ItemsContext = createContext();
export const CartContext = createContext();
export const HighlightsContext = createContext();
export const CartTotalContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getDbData(setItems, setCart, setHighlights, setLoading, setCartTotal);
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
        <ItemsContext.Provider value={items}>
          <CartTotalContext.Provider value={cartTotal}>
            <div className={styles.app}>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home highlights={highlights} />
                      {items.map((item) => {return (<h1>{item.name}</h1>)})}
                    </>
                  }
                />
                <Route path="/videojuegos" element={<Products category={"Videojuegos"}/>} />
                <Route path="/videojuegos/:name" element={<ItemDetail />} />
                <Route
                  path="/juegos De Mesa"
                  element={<Mantenimiento titulo={"Juegos de Mesa"} />}
                />
                <Route path="/tcg" element={<Products category={"TCG"}/>} />
                <Route path="/tcg/:name" element={<ItemDetail />} />
                <Route path="/comics y mangas" element={<Mantenimiento />} />
                <Route
                  path="/coleccionables"
                  element={<h1>Coleccionables</h1>}
                />
                <Route path="/coleccionables/:name" element={<ItemDetail />} />
                <Route path="/Carrito" element={<Cart cart={cart} />} />
              </Routes>
              <Footer />
            </div>
          </CartTotalContext.Provider>
        </ItemsContext.Provider>
      )}
    </>
  );
}

export default App;
