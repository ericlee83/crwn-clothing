import React from "react";
import {CheckoutPageContainer,CheckoutBlockContainer,CheckoutHeaderContainer,CheckoutTotalContainer,CheckoutWarningContainer} from './CheckoutPage.style'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutBlockContainer>
        <span>Product</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Description</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Quantity</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Price</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Remove</span>
      </CheckoutBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckoutTotalContainer>
      <span>Total: ${total}</span>
    </CheckoutTotalContainer>
    <CheckoutWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      <br />
      *Find more on stripe on https://github.com/azmenak/react-stripe-checkout
    </CheckoutWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToPros = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToPros)(CheckoutPage);
