import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../redux/actions';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
