//Библиотеки
import React from "react";
import { Link } from "react-router-dom";
// Пикча
import cartPath from "../assets/images/empty-cart.png"

export default function CartBlockEmpty() {
  return (
    <main className="content">
      <div className="container container_type_cart">
        <div className="cart cart_type_empty">
          <h2 className="cart_top">Корзина пустая 😕</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartPath} alt="Empty cart" />
          <Link to="/pizza-app" className="button button_type_black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </main>
  )
}