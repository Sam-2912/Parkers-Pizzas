import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";

const CartItem = ({ cartItem }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [newQuantity, setNewQuantity] = useState(1);
  const dispatch = useDispatch();

  const editPizzaQuantity = (e, cartItemToEdit) => {
    e.preventDefault();

    const updatedCartItem = {
      ...cartItemToEdit,
      quantity: Number(newQuantity),
    };
    dispatch({ type: "SET_CART_ITEM", payload: updatedCartItem });
    setShowSuccessMessage(true);
  };

  const removePizza = (cartItemToRemove) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: cartItemToRemove });
  };

  return (
    <div
      key={cartItem.id}
      className="shadow-lg rounded-lg flex flex-col sm:flex-row items-stretch max-w-2xl p-4 mx-auto mb-8 border"
    >
      <img
        className="mr-4 sm:w-2/5 w-full mb-4 object-cover"
        src={cartItem.pizza.img_url}
        alt={cartItem.pizza.name}
      />
      <div className="w-full sm:w-2/3">
        <h3 className="font-bold text-2xl mb-2 whitespace-nowrap">
          {cartItem.pizza.name}
        </h3>
        <div className="flex items-center mb-2 text-lg">
          <span className="font-bold mr-4 block">
            Quantity: <span className="font-normal">{cartItem.quantity}</span>
          </span>

          <Popup
            trigger={
              <i className="ri-edit-2-line text-xl text-gray-500 cursor-pointer"></i>
            }
            modal
          >
            {(close) => (
              <div className="modal p-4">
                <button
                  className="close w-full flex items-center justify-end"
                  onClick={() => {
                    close();
                    setShowSuccessMessage(false);
                  }}
                >
                  <i className="ri-close-line text-2xl text-theme-orange-300"></i>
                </button>
                <div className="header font-bold text-2xl mb-4">
                  Edit Quantity
                </div>
                <div className="content text-lg">
                  <form
                    className="mb-4"
                    onSubmit={(e) => editPizzaQuantity(e, cartItem)}
                  >
                    <label htmlFor="quantity" className="font-bold mr-2">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      className="w-16 rounded-lg pl-3 border-2 border-theme-gray-500 outline-none"
                      min="1"
                      value={newQuantity}
                      onChange={({ target }) => setNewQuantity(target.value)}
                    />

                    <button
                      type="submit"
                      className="bg-theme-orange-300 px-4 py-1.5 my-3 block text-white"
                    >
                      Edit
                    </button>
                  </form>
                  {showSuccessMessage && (
                    <div className="text-green-600 text-lg flex items-center">
                      <i className="ri-checkbox-circle-line mr-2"></i>
                      <span className="mr-2">Quantity Updated!</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Popup>
        </div>

        <span className="font-bold text-lg mb-2 block">
          Size:{" "}
          <span className="font-normal">{cartItem.pizza.sizeSelected}</span>
        </span>
        <span className="font-bold text-lg mb-2 block">
          Topping(s):{" "}
          <span className="font-normal">
            {Array.isArray(cartItem.pizza.toppingsSelected)
              ? cartItem.pizza.toppingsSelected.join(", ")
              : cartItem.pizza.toppingsSelected}
          </span>
        </span>

        <span className="font-bold text-lg mb-2 block">
          Price Per Pizza:{" "}
          <span className="font-normal">Rs. {cartItem.pizza.price}</span>
        </span>

        <button
          className="bg-red-400 px-4 my-4 py-1.5 text-white"
          onClick={() => removePizza(cartItem)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
