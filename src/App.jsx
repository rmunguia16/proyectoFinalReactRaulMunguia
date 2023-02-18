import { createContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import styles from "./App.module.css";
import "./App.css";

import Mantenimiento from "./components/Maint";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart";
import Loading from "./components/Loading";
import ItemList from "./components/ItemList";

import getDbData from "./customHooks/getDbData";
import getAll from "./customHooks/getAll";

export const ItemsContext = createContext();
export const HighlightsContext = createContext();
export const CartContext = createContext();
export const CartTotalContext = createContext();
export const SetItemsContext = createContext();
export const SetCartContext = createContext();
export const SetCartTotalContext = createContext();
export const LoadingContext = createContext();
export const SetLoadingContext = createContext();
export const SetHighlightsContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getAll(setLoading, setCartTotal, setCart, setItems, setHighlights);
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
            <SetCartTotalContext.Provider value={setCartTotal}>
              <SetLoadingContext.Provider value={setLoading}>
                <SetHighlightsContext.Provider value={setHighlights}>
                  <SetCartContext.Provider value={setCart}>
                    <SetItemsContext.Provider value={setItems}>
                      <CartContext.Provider value={cart}>
                        <NavBar />
                        <div className="app">
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                              path="/videojuegos"
                              element={<ItemList category={"Videojuegos"} />}
                            />
                            <Route
                              path="/videojuegos/:id"
                              element={<ItemDetail />}
                            />
                            <Route
                              path="/juegos De Mesa"
                              element={
                                <Mantenimiento titulo={"Juegos de Mesa"} />
                              }
                            />
                            <Route
                              path="/tcg"
                              element={<ItemList category={"TCG"} />}
                            />
                            <Route
                              path="/tcg/:id"
                              element={
                                loading == false ? <ItemDetail /> : <Loading />
                              }
                            />
                            <Route
                              path="/comics y mangas"
                              element={<Mantenimiento />}
                            />
                            <Route
                              path="/coleccionables"
                              element={<ItemList category={"Coleccionables"} />}
                            />
                            <Route
                              path="/coleccionables/:id"
                              element={<ItemDetail />}
                            />
                            <Route
                              path="/Carrito"
                              element={<Cart cart={cart} />}
                            />
                          </Routes>
                        </div>
                        <Footer />
                      </CartContext.Provider>
                    </SetItemsContext.Provider>
                  </SetCartContext.Provider>
                </SetHighlightsContext.Provider>
              </SetLoadingContext.Provider>
            </SetCartTotalContext.Provider>
          </CartTotalContext.Provider>
        </ItemsContext.Provider>
      )}
    </>
  );
}

export default App;
