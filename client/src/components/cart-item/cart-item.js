import React from "react";
import { CartItemContainer, CartDetailsContainer } from "./cart-item.style";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <CartDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} * ${price}
      </span>
    </CartDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
