//Библиотеки
import React from "react";
import { Route, Routes } from "react-router-dom";

//Компоненты
import Header from "./Header";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import { SearchContext } from "../contexts/SearchContext/SearchContext";

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <Routes>
            <Route path="/pizza-app" element={<HomePage searchValue={searchValue}/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/pizza-app/cart" element={<Cart />} />
          </Routes>
        </SearchContext.Provider>
      </div>
  );
}

export default App;
