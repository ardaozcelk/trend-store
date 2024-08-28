import "./Cart.css";
import CartItem from "./CartItem";
import Offcanvas from "./Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
const Cart = (props) => {
  const { items, totalAmount,clearItem} = useContext(CartContext);
  const hasItems = items.length > 0;
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={props.onClose}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{totalAmount?.toFixed(2)}₺</span>
      </div>
      {hasItems && 
      <div className="actions">
        <button className="cart-order">Sipariş Ver</button>
        <button className="cart-clear" onClick={clearItem}>Vazgeç</button>
      </div>}
    </Offcanvas>
  );
};

export default Cart;
