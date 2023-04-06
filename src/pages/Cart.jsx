import React from "react";  
import CartBlockEmpty from "../components/CartBlockEmpty";
import CartBlock from "../components/CartBlock";
export default function Cart(props) {
  return (
    <>
      { props.isEmpty 
        ? <CartBlockEmpty />
        : <CartBlock />
      }
    </>
  )
}