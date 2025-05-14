import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const NafasatVol2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 26,
      name: "Skin Gold Short Sherwani",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(2).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(3).jpeg",
      category: "sherwani",
    },
    {
      id: 27,
      name: "Black Velvet Heavy Sherwani",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(2).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(4).jpeg",
      category: "sherwani",
    },
    {
      id: 28,
      name: "Black & Water Gold Sherwani",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(4).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(3).jpeg",
      category: "sherwani",
    },
    {
      id: 29,
      name: "Pista Motif Sherwani",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 30,
      name: "Black Atlas Sherwani",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(4).jpeg",
      category: "sherwani",
    },
    {
      id: 31,
      name: "Heavy Embroidered Skin Sherwani",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(3).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 32,
      name: "Golden Self Printed",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(3).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 33,
      name: "Self Printed Jamawar",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(3).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(2).jpeg",
      category: "sherwani",
    },
    {
      id: 69,
      name: "Machine Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(3).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(1).jpeg",
      category: "priceCoat",
    },
    {
      id: 70,
      name: "Heavy Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(2).jpeg",
      hoverImage:"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(4).jpeg",
      category: "priceCoat",
    },
    {
      id: 105,
      name: "Embroidered Kundan Zari Sherwani",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(2).jpeg",
      hoverImage:"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(1).jpeg",
      category: "sherwani",
    },
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

export default NafasatVol2;
