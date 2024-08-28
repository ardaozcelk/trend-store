import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span>Sepetim</span>
      <span className="badge"> {totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
