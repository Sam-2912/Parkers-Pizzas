import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PizzaDetail from "./pages/PizzaDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pizza/:id" exact element={<PizzaDetail />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
