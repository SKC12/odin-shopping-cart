import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const BASE_STOCK = [
  { name: "Red", color: "red", price: 15 },
  { name: "Blue", color: "blue", price: 5 },
  { name: "Yellow", color: "yellow", price: 12 },
  { name: "Green", color: "green", price: 11 },
  { name: "Grey", color: "grey", price: 18 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState(BASE_STOCK);

  function addToCart(item) {
    // console.log(item);
    // console.log(cart);
    setCart([...cart, ...item]);
    // console.log(cart);
  }

  function removeFromCart(item) {
    let index = cart.findIndex((x) => x.name === item.name);
    let newArr = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(newArr);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Nav cartSize={cart.length} />

          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route
              path="/shop"
              element={<Shop stock={stock} addToCart={addToCart} />}
            ></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
