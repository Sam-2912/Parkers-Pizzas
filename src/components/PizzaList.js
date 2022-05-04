import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingIcon from "../images/loading.gif";
import Filters from "./Filters";
import Pizza from "./Pizza";
import { getPizzas } from "../utils/helpers";

const PizzaList = () => {
  const [loading, setLoading] = useState(true);
  const pizzas = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pizzas.length === 0) {
      getPizzas().then((data) => {
        dispatch({ type: "SET_PIZZAS", payload: data });
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [dispatch, pizzas]);

  return (
    <section>
      <div className="my-16">
        <h2 className="text-center text-4xl mb-4 px-4">Our Popular Dishes</h2>
        <p className="text-center text-gray-500 px-4">
          Lorem ipsum is simply a dummy text of the printing and he is gent
          typesetting industry.
        </p>
      </div>

      <Filters setLoading={setLoading} />

      {loading ? (
        <div className="flex items-center justify-center">
          <img className="w-12 h-12" src={loadingIcon} alt="Loading Icon" />
        </div>
      ) : (
        <div className="max-w-6xl px-5 my-8 mx-auto flex items-stretch justify-around flex-wrap">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PizzaList;
