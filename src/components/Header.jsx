import logoPath from "../assets/images/pizza-logo.svg";
import { Link } from "react-router-dom";

import Search from "./Search";

// Пикчи
import cartPath from "../assets/images/cart.svg"

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <Link to="pizza-app">
          <div className="header__logo">
            <img width="38" src={logoPath} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/pizza-app/cart" className="button button-cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img className="button-cart_svg" alt="Корзина" src={cartPath}/>
            <span>3</span>
          </Link>
        </div>
      </div>
    </header>
  )
}