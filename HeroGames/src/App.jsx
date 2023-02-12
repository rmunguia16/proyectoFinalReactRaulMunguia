import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mantenimiento from "./components/Mantenimiento";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Footer from "./components/Footer";
import data from "./data.json";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [items, setItems] = useState("");

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videojuegos" element={<h1>Vijeojuegos</h1>} />
        <Route path="/videojuegos/:name" element={<ItemDetail data={data} />} />
        <Route path="/juegos De Mesa" element={<Mantenimiento />} />
        <Route
          path="/juegos De Mesa/:name"
          element={<ItemDetail data={data} />}
        />
        <Route path="/tcg" element={<h1>TCG</h1>} />
        <Route path="/tcg/:name" element={<ItemDetail data={data} />} />
        <Route path="/comics y mangas" element={<h1>Comics</h1>} />
        <Route
          path="/comics y mangas/:name"
          element={<ItemDetail data={data} />}
        />
        <Route path="/coleccionables" element={<h1>Colecciobables</h1>} />
        <Route
          path="/coleccionables/:name"
          element={<ItemDetail data={data} />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
