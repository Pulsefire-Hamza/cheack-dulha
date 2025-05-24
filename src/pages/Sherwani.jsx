import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Sherwani = () => {
  const products = [
      {
      id: 138,
      name: "‘Babar’ Sherwani",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RanjhaCollection/pro%201%20%20(3).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RanjhaCollection/pro%201%20%20(2).jpeg",
      category: "sherwani",
    },
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
      id: 105,
      name: "Embroidered Kundan Zari Sherwani",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(2).jpeg",
      hoverImage:"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(1).jpeg",
      category: "sherwani",
    },
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
      image: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20II%20-%20Sherwanis%2F8%20(1).jpg?alt=media&token=28cf9fba-d015-4554-aca9-4916aeb1aebd",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20II%20-%20Sherwanis%2F8%20(4).jpg?alt=media&token=0f4067c7-fc26-4154-8238-9c9324a62ebe",
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
  },
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
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleWhatsAppClick = (product) => {
    // Send product name and image URL to WhatsApp
    const message = `Hello, I am interested in the ${product.name}. Please provide more details.\n\nImage: ${product.image}`;
    const url = `https://wa.me/+923444447759?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
                className={`w-128 h-128 object-cover mb-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${product.hoverImage ? "group-hover:scale-105 group-hover:shadow-2xl" : ""}`}
              />
              {/* Hover Image */}
              {product.hoverImage && (
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-128 h-128 object-cover mb-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
              )}
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
</h2>              <button
                className="text-green-500 text-xl hover:text-green-700 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppClick(product);
                }}
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sherwani;
