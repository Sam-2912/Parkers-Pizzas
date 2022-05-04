import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cart.reduce(
      (prev, curr) => prev + curr.quantity * Number(curr.pizza.price),
      0
    );
  };

  return (
    <div className="mt-16">
      <div className="my-6 px-4">
        <h3 className="pt-7 my-6 font-bold text-2xl text-center">
          Your Order Summary
        </h3>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="text-2xl text-center block">
            Nothing here yet...!{" "}
            <Link to="/" className="text-theme-orange-300 underline">
              Shop Some Pizzas?
            </Link>
          </span>
        )}

        <div className="my-6 max-w-2xl text-2xl flex items-center mx-auto justify-between border-t border-b border-gray-500 p-4">
          <span className="font-bold">Total: </span>
          <span>Rs. {calculateTotal()}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
