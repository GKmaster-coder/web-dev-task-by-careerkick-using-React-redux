import React, { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Add ShoppingCart import
import logo from "../assets/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.product.searchItem);

  const cartItems = useSelector((state) => state.cart.items); // Correct state access to match the initialState
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Properly summing up quantities

  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="py-4 shadow-md">
        <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
          <div className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                : "hidden"
            }`}
          >
            <li>
              <Link to="/">Sign</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
          </div>
          <li onClick={handleUser}>
            <User
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
            />
          </li>
        </ul>
      </div>
      <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
        <div className="flex items-center">
          <Link to="/" className="bg-gray-700 py-2 px-4 rounded">
            <img src={logo} alt="Logo" className="w-24" />
          </Link>
        </div>
        <form className="w-1/2 sm:block hidden">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-zinc-100100 rounded-md border border-zinc-200 focus:outline-none py-3 px-3 w-full"
            value={searchItem}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </form>

        <div className="relative">
        <Link to="/cart">
          <ShoppingCart
            size={54}
            className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
          />
          {itemCount > 0 && (
            <span className="absolute-top-2 -right-5 bg-blue-600 text-xs rounded-full w-5 h-5  flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
