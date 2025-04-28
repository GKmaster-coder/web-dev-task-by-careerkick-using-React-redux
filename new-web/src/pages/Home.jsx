import React from "react";
import ProductGride from "../component/ProductGride";
import Footer from "../component/Footer";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/ProductSlice";

const categories = ["Laptops", "Phones", "Keyboards", "All"];

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg"></div>
      <div className="container ms-auto my-10 px-4">
        <div className="flex gap-4 ">
          {categories.map((cat) => {
            return (
              <button
                className="bg-gray-300 py-2 px-2 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
                key={cat}
                onClick={() => dispatch(setSelectedCategory(cat))}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <ProductGride />
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
