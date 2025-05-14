import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const GumaanVol2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 18,
      name: "Gumaan Cubic Bissino",
      price: "27,800 PKR", // This is no longer displayed
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(3).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 19,
      name: "Gumaan Dori Bazu Bissino",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(4).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 20,
      name: "Gumaan Black Copper Motif",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.", 
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(4).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(1).jpeg",
      category: "sherwani",
    },
    {
      id: 21,
      name: "Gumaan Black Heavy Jaal",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%204%20(1).jpeg",
      hoverImage:"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%204%20(2).jpeg",
      category: "sherwani",

    },
    {
      id: 22,
      name: "Gumaan Panel Jaal",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(4).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(1).jpeg",
      category: "sherwani",
    },
    {
      id: 23,
      name: "Gumaan Open Gown",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%206%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%206%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 24,
      name: "Gumaan K-M Mountains",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(4).jpeg",
      category: "sherwani",
    },
 
    {
      id: 222,
      name: "Gumaan K-Bissino",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(3).jpeg",
      category: "sherwani",
    },
    {
      id: 211,
      name: "Gumaan Velvet Jaal",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image:        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(4).jpeg",
      hoverImage:  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 102,
      name: "Gumaan Krundy Chicken Kari",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image:        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(1).jpeg",
      hoverImage:  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(4).jpeg",
      category: "sherwani",
    },
    {
      id: 103,
      name: "Gumaan Sheesh Mehal",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image:        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(4).jpeg",
      hoverImage:  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(3).jpeg",
      category: "priceCoat",
    },
    {
      id: 104,
      name: "Gumaan KM Side Motif",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image:        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(3).jpeg",
      hoverImage:  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(2).jpeg",
      category: "priceCoat",
    },
  
    // Add other products similarly...
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
    return `https://wa.me/+923444447759?text=${encodeURIComponent(message)}`; // WhatsApp message format
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

        {/* Sherwani Button */}
        <button
          onClick={() => handleCategoryClick("sherwani")}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl"
        >
          Sherwani
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
                {/* WhatsApp Icon */}
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

export default GumaanVol2;
