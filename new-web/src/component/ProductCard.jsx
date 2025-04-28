import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col h-[500px] bg-white">
        
        {/* Image Section */}
        <div className="h-[250px] flex items-center justify-center p-4">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-full object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-grow bg-gray-50 p-4">
          <div>
            <h2 className="text-lg font-semibold mb-2 h-[56px] overflow-hidden">
              {product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title}
            </h2>
            <p className="text-sm text-zinc-500 mb-4 h-[48px] overflow-hidden">
              {product.description.length > 70 ? product.description.substring(0, 70) + "..." : product.description}
            </p>
          </div>

          <div className="flex justify-between items-center pt-2 border-t">
            <p className="text-xl font-bold">${product.price}</p>
            <p className="text-blue-500 font-medium">View Details</p>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default ProductCard;
