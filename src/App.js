import React, { useState } from "react";
import "./App.css";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showcartHandler = () => {
    setCartIsShow(true);
  };

  const hidecartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hidecartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
