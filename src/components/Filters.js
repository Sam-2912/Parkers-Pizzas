import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = ({ setLoading }) => {
  const [sort, setSort] = useState("sort");
  const [isVeg, setIsVeg] = useState("all");
  const [unFilteredPizzas, setUnFilteredPizzas] = useState([]);
  const pizzas = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    setUnFilteredPizzas(pizzas);
  }, []); // eslint-disable-line

  const sortPizzas = ({ target }) => {
    const { value } = target;
    setSort(value);
    let sortedPizzas = [];
    if (value === "price:hightolow") {
      sortedPizzas = pizzas.sort((a, b) => (a.price > b.price ? -1 : 1));
    } else if (value === "price:lowtohigh") {
      sortedPizzas = pizzas.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (value === "rating:hightolow") {
      sortedPizzas = pizzas.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    } else if (value === "rating:lowtohigh") {
      sortedPizzas = pizzas.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    }
    dispatch({ type: "SET_PIZZAS", payload: sortedPizzas });
  };

  const showVegOrNonVeg = ({ target }) => {
    const { value } = target;
    setIsVeg(value);
    const vegOrNonVegPizzas = pizzas.filter((pizza) =>
      value === "veg" ? pizza.isVeg : !pizza.isVeg
    );
    dispatch({
      type: "SET_PIZZAS",
      payload: value === "all" ? unFilteredPizzas : vegOrNonVegPizzas,
    });
  };

  const resetFilters = () => {
    setLoading(true);
    setSort("sort");
    setIsVeg("all");
    dispatch({ type: "SET_PIZZAS", payload: unFilteredPizzas });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center flex-wrap">
        <div className="flex items-center mb-4">
          <span className="text-gray-500 font-bold text-lg mr-2">Sort: </span>
          <select
            className="form-select appearance-none block w-44 px-3 py-1.5 text-base font-normal rounded-2xl text-gray-500 bg-white bg-clip bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-theme-orange-300 focus:outline-none mr-6"
            value={sort}
            onChange={sortPizzas}
          >
            <option disabled value="sort" className="text-gray-500">
              Sort
            </option>
            <option value="price:hightolow">Price: High to Low</option>
            <option value="price:lowtohigh">Price: Low to High</option>
            <option value="rating:hightolow">Rating: High to Low</option>
            <option value="rating:lowtohigh">Rating: Low to High</option>
          </select>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-gray-500 font-bold text-lg mr-2">Type: </span>
          <select
            className="form-select appearance-none block w-44 px-3 py-1.5 text-base font-normal rounded-2xl text-gray-500 bg-white bg-clip bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-theme-orange-300 focus:outline-none mr-6"
            value={isVeg}
            onChange={showVegOrNonVeg}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>

        <button
          className="bg-theme-orange-300 text-white px-4 mb-4 py-1.5 rounded-2xl"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
