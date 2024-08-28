import "./Header.css"
import HeaderCartButton from "./HeaderCartButton"
const Header = ({onShowCart}) => {
  return (
    <header className="header">
        <h1>Trendy Mağaza</h1>
        <HeaderCartButton onShowCart={onShowCart}></HeaderCartButton>
    </header>
  )
}

export default Header