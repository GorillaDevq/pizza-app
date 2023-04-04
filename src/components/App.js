//Библиотеки
import React from "react";
import { Route, Routes } from "react-router-dom";

//Компоненты
import Header from "./Header";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/pizza-app" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pizza-app/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
