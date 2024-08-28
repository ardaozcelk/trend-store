import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/UI/Cart";
import CartProvider from "./context/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler}></Header>
      <Hero></Hero>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
