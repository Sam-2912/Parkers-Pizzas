import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const Pizza = ({ pizza }) => {
  return (
    <Link
      to={`/pizza/${pizza.id}`}
      className="shadow-lg p-6 w-72 m-8 flex flex-col justify-around"
    >
      <img
        className="w-full h-40 object-cover mx-auto"
        src={pizza.img_url}
        alt={pizza.description}
      />
      <h3 className="text-2xl font-bold mt-6 mb-3">{pizza.name}</h3>

      <span className="text-gray-500 mb-4">{pizza.description}</span>

      <Ratings ratings={pizza.rating} />

      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-lg">
          Rs. <span className="text-2xl font-bold">{pizza.price}</span>
        </span>
        <div className="p-1 bg-theme-orange-300">
          <i className="ri-add-line text-white text-lg"></i>
        </div>
      </div>
    </Link>
  );
};

export default Pizza;
