//Библиотеки
import React from "react";
import { Link } from "react-router-dom";
// Стили
import "./Cart.scss"
import cartPath from "../../assets/images/empty-cart.png"

export default function CartBlock() {
  return (
    <main className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая <icon>😕</icon></h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartPath} alt="Empty cart" />
          <Link to="/pizza-app" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </main>
  )
}