import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp icon

const Nafasat = () => {
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
    {
      "id": 34,
      "name": "Mughal Motif Sherwani",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%201%20(1).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%201%20(2).jpeg"
  },
  {
      "id": 35,
      "name": "Golden Ari Jacquard Sherwani",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%202%20(1).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%202%20(2).jpeg"
  },
  {
      "id": 36,
      "name": "Border Jaal Offwhite",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%203%20(1).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%203%20(2).jpeg"
  },
  {
      "id": 37,
      "name": "Atlas SP Design",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/por%204%20(3).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/por%204%20(1).jpeg"
  },
  {
      "id": 38,
      "name": "4-G Sherwani",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%205%20(3).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%205%20(2).jpeg"
  },
  {
      "id": 39,
      "name": "4-G Collar Krundy",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%206%20(1).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%206%20(3).jpeg"
  },
  {
      "id": 40,
      "name": "R-P Sherwani",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%207%20(2).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%207%20(1).jpeg"
  },
  {
      "id": 41,
      "name": "Half Bazu Payzli",
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%208%20(1).jpeg",
      "hoverImage": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%208%20(2).jpeg"
  }
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };


  // Generate WhatsApp message with product name and image URL
  const generateWhatsAppMessage = (product) => {
    const message = `
      Product Name: ${product.name}
      Image URL: ${product.image}
    `;
    return `https://wa.me/+923444447759?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-44 pb-20 px-4">
    

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
                href={generateWhatsAppMessage(product)} // WhatsApp message link
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

export default Nafasat;
