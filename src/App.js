import React, { useState } from "react";
import "./App.css";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showcartHandler = () => {
    setCartIsShow(true);
  };

  const hidecartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <React.Fragment>
      {cartIsShow && <Cart onClose={hidecartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
