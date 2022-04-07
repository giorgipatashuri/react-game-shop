// import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import {CalcTotalPrice} from '../util'
import "./cart-block.css";
import { CartMenu } from "../cart-menu/cart-menu";
import { useCallback, useState } from "react";
import { ItemsInCart } from '../items-in-cart/items-in-cart'
import { useNavigate } from "react-router";

export const CartBlock = () => {
  const [isCardVisibilite,setisCardVisibilite] = useState(false)
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = CalcTotalPrice(items)
  const navigate = useNavigate()
  const handleGoToOrderClick = useCallback(() => {
    setisCardVisibilite(false);
    navigate('react-game-shop/order');
  },[navigate]);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt
        color="white"
        size={25}
        className="cart-icon"
        onClick={()=> setisCardVisibilite(!isCardVisibilite)}
      />
        <span className="total-price"> {Math.round(totalPrice)} $</span>
        { isCardVisibilite && <CartMenu items ={ items } onClick={handleGoToOrderClick}/> }
    </div>
  );
};
