import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const GumaanVol1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      "id": 12,
      "name": "COV Heavy Coat",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(4).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(3).jpeg",
      "category": "priceCoat"
    },
    {
      "id": 13,
      "name": "Purple Dori Jaal",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(3).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(1).jpeg",
      "category": "priceCoat"
    },
    {
      "id": 14,
      "name": "KM Up Down Motif",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(4).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(3).jpeg",
      "category": "priceCoat"
    },
    {
      "id": 15,
      "name": "KM Rust Shoulder Waistcoat",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(2).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(1).jpeg",
      "category": "waistCoat"
    },
    {
      "id": 16,
      "name": "Copper Tissue Border Spray ",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(4).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(2).jpeg",
      "category": "waistCoat"
    },
    {
      "id": 17,
      "name": "3-D Sea Green Waistcoat",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(1).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(2).jpeg",
      "category": "waistCoat"
    }
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const generateWhatsAppMessage = (product) => {
    const message = `
      Product Name: ${product.name}
      Product URL: ${window.location.origin}/product/${product.id}
      Image URL: ${product.image}
    `;
    return `https://wa.me/+923444447759?text=${encodeURIComponent(message)}`; // Use the updated WhatsApp number
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-44 pb-20 px-4">
    

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Price Coat Button */}
        <button
          onClick={() => handleCategoryClick("priceCoat")}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl"
        >
          Prince Coat
        </button>

        {/* Waist Coat Button */}
        <button
          onClick={() => handleCategoryClick("waistCoat")}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl"
        >
          Waist Coat
        </button>

        {/* Show All Button */}
        <button
          onClick={() => handleCategoryClick("all")}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl"
        >
          Show All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products
          .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
          .map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative group w-full h-auto overflow-hidden">
                {/* Default Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-128 h-128 object-cover mb-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
                />
                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-128 h-128 object-cover mb-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
              </div>
              <div className="w-full flex justify-between items-center mt-2">
               <h2 className="text-sm md:text-lg font-light text-gray-700 text-left truncate" style={{
    fontFamily: '"Josefin Sans", Arial, sans-serif',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: 'normal',
    color: '#3c3c3c',
    backgroundColor: '#ffffff'
}}>
    {product.name}
</h2>
                <a
                  href={generateWhatsAppMessage(product)} // Generate the WhatsApp message
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-xl"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GumaanVol1;
