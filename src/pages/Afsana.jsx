import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const Afsanah = () => {

  const products = [
    {
      id: 1,
      name: "Afsanah Black Border",
      price: "24,950 PKR",
      description: "A stunning light purple kurta pajama perfect for special occasions.",
      image:
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(1).jpeg",
      hoverImage:
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(4).jpeg",
    },
    {
      id: 2,
      name: "Afsanah Coffee Motif",
      price: "29,500 PKR",
      description: "A classic white sherwani with intricate embroidery for wedding occasions.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202%20(2).jpeg",
    },
    {
      id: 3,
      name: "Afsanah Black Gold Motif",
      price: "35,000 PKR",
      description: "A majestic royal blue sherwani crafted with golden embellishments.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(2).jpeg",
    },
    {
      id: 4,
      name: "Afsanah Bissino Mor",
      price: "32,750 PKR",
      description: "A luxurious golden beige sherwani with subtle detailing for a royal look.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(2).jpeg",
    },
    {
      id: 5,
      name: "Afsanah Velvet Jaal",
      price: "28,000 PKR",
      description: "A timeless black sherwani perfect for evening events and formal occasions.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(2).jpeg",
    },
    {
      id: 6,
      name: "Afsanah Moti Jaal",
      price: "33,900 PKR",
      description: "A sophisticated ivory white sherwani with premium fabric and design.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(8).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(7).jpeg",
    },
    {
      id: 7,
      name: "Afsanah Machli Tanka",
      price: "40,000 PKR",
      description: "An opulent maroon velvet sherwani with intricate golden embroidery.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(2).jpeg",
    },
    {
      id: 8,
      name: "Afsanah Chicku Jaal",
      price: "40,000 PKR",
      description: "An opulent maroon velvet sherwani with intricate golden embroidery.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(2).jpeg",
    },
    {
      id: 9,
      name: "Afsanah Rose Gold Jaal",
      price: "38,750 PKR",
      description: "A golden sherwani paired with a vibrant red dupatta for traditional charm.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(2).jpeg",
    },
    {
      id: 10,
      name: "Afsanah Open Gown",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(5).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(8).jpeg",
    },
  
    {
      id: 11,
      name: "Afsanah KM Heavy Jaal",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(2).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(3).jpeg",
    },
     {
      id: 269,
      name: "Afsanah Buhay Barian",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(2).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(1).jpeg",
    },

  
    // Add other products similarly...
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
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
      {/* Heading */}
      

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
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

export default Afsanah;
