import React from "react";

const Ratings = ({ ratings }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center mr-2">
        <i
          className={`text-theme-orange-300 ri-star-${
            ratings === 0.5 ? "half-fill" : 1 <= ratings ? "fill" : "line"
          }`}
        ></i>
        <i
          className={`text-theme-orange-300 ri-star-${
            ratings === 1.5 ? "half-fill" : 2 <= ratings ? "fill" : "line"
          }`}
        ></i>
        <i
          className={`text-theme-orange-300 ri-star-${
            ratings === 2.5 ? "half-fill" : 3 <= ratings ? "fill" : "line"
          }`}
        ></i>
        <i
          className={`text-theme-orange-300 ri-star-${
            ratings === 3.5 ? "half-fill" : 4 <= ratings ? "fill" : "line"
          }`}
        ></i>
        <i
          className={`text-theme-orange-300 ri-star-${
            ratings === 4.5 ? "half-fill" : 5 <= ratings ? "fill" : "line"
          }`}
        ></i>
      </div>
      <span className="text-gray-500">({ratings})</span>
    </div>
  );
};

export default Ratings;
