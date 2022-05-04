import React from "react";
import landingImg from "../images/landing3.webp";
import PizzaList from "../components/PizzaList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="main-section flex items-center justify-between w-full bg-theme-orange-100 mt-14">
        <div className="max-w-7xl flex items-center justify-between mx-auto">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="w-3/4">
              <h1 className="text-6xl mb-6">
                Best & <span className="text-theme-orange-300">Fastest</span>{" "}
                <br />
                Pizza Delivery
              </h1>
              <p className="text-gray-500">
                Don't worry! We will deliver your pizzas on time :). Lorem ipsum
                is simply a dummy text of the printing and he is gent
                typesetting industry. Lorem ipsum one the dummy text of the
                printing.
              </p>
            </div>
          </div>
          {/* image */}
          <div className="mx-8 w-1/2 md:flex items-center justify-center hidden">
            <img
              className="w-fit h-fit"
              src={landingImg}
              alt="Delicious Pizza with all the toppings"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <PizzaList />

      <section className="bg-theme-orange-100 my-8 p-4">
        <div className="max-w-2xl mx-auto mt-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            Get Free Home Delivery
          </h3>
          <p className="text-gray-500 mb-8 text-center">
            Lorem ipsum is simply a dummy text of the printing and he is gent
            typesetting industry. Lorem ipsum one the dummy text of the
            printing.
          </p>

          <div className="flex items-center justify-center mb-8 max-w-max mx-auto">
            <input
              className="p-4 outline-none w-3/5"
              placeholder="Enter your email here..."
              autoComplete="off"
              spellCheck="false"
            />
            <button className="bg-theme-orange-300 py-4 px-6 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
