import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WaistCoat = () => {
  const products = [
     {
      id: 137,
      name: "‘Fateh-1’ Waist Coat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/Fateh%201%20waist%20coat%20(1).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/Fateh%201%20waist%20coat%20(2).jpeg",
      category: "waistCoat",
    },
    {
      id: 15,
      name: "KM Rust Shoulder Waistcoat",
      image: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2Fgumman%20vol1%20vaist%20caot%2F1%20(1).jpeg?alt=media&token=42f66514-8f38-4279-95fd-98059a3f5a05",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2Fgumman%20vol1%20vaist%20caot%2F1%20(4).jpeg?alt=media&token=840a83d9-40cb-43ad-8d2c-dc21c64ab838",
      category: "waistCoat",
    },
    {
      id: 16,
      name: "Copper Tissue Border Spray",
      image: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2Fgumman%20vol1%20vaist%20caot%2F2%20(3).jpeg?alt=media&token=bd0448d2-85f4-4eb8-b815-ce092fd0d64f",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2Fgumman%20vol1%20vaist%20caot%2F2%20(1).jpeg?alt=media&token=2f469a21-3e48-4516-bb26-9daac6e5feee",
      category: "waistCoat",
    },
    {
      id: 17,
      name: "3-D Sea Green Waistcoat",
      image: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2Fgumman%20vol1%20vaist%20caot%2F3%20(4).jpeg?alt=media&token=8edc9eb2-9697-4055-b6ff-9fa058982f57",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2Fgumman%20vol1%20vaist%20caot%2F3%20(1).jpeg?alt=media&token=6b942e16-4ebc-4fdc-99a0-fc226b10c2a4",
      category: "waistCoat",
    },
   
    {
      id: 71,
      name: "Tissue Border Payzli",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/1.jpeg",
      category: "waistCoat",
    },
    {
      id: 72,
      name: "Atlas Waisctoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/2.png",
  
      category: "waistCoat",
    },
    {
      id: 73,
      name: "Love-Story Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/3.jpeg",
    
      category: "waistCoat",
    },
    {
      id: 74,
      name: "F-S Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/4.jpeg",

      category: "waistCoat",
    },
    {
      id: 75,
      name: "Offwhite Suiting Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/5.jpeg",

      category: "waistCoat",
    },
    {
      id: 76,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/6.jpeg",

      category: "waistCoat",
    },
    {
      id: 77,
      name: "A-B Embroidery Collar",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/7.jpeg",

      category: "waistCoat",
    },
    {
      id: 78,
      name: "Motif Collar Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/8.jpeg",

      category: "waistCoat",
    },
    {
      id: 79,
      name: "A-B Dori Black Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/9.jpeg",

      category: "waistCoat",
    },
    {
      id: 80,
      name: "O-G Brown Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/10.jpeg",

      category: "waistCoat",
    },
    {
      id: 81,
      name: "A-B Ari Green Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/11.jpeg",

      category: "waistCoat",
    },
    {
      id: 82,
      name: "A-B Dori Green Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/12.jpeg",
     
      category: "waistCoat",
    },
    {
      id: 83,
      name: "Mor Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/13.jpeg",
   
      category: "waistCoat",
    },
    {
      id: 84,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/14.png",
      category: "waistCoat",
    },
    {
      id: 85,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/15.jpeg",

      category: "waistCoat",
    },
    {
      id: 86,
      name: "R-P Waiscoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/16.jpeg",
 
      category: "waistCoat",
    },
    {
      id: 87,
      name: "A-B Velvet Black Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/17.jpeg",
  
      category: "waistCoat",
    },
    {
      id: 88,
      name: "5D-2 Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/18.jpeg",
    
      category: "waistCoat",
    },
    {
      id: 89,
      name: "A-B Green Dori Panel",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/19.jpeg",

      category: "waistCoat",
    },
    {
      id: 90,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/20.jpeg",
      
      category: "waistCoat",
    },
    {
      id: 91,
      name: "Front Line Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/21.jpeg",
    
      category: "waistCoat",
    },
    {
      id: 92,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/22.png",
  
      category: "waistCoat",
    },
    {
      id: 93,
      name: "Rust Motif Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/23.jpeg",

      category: "waistCoat",
    },
    {
      id: 94,
      name: "FSQ Ice Blue Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/24.png",
   
      category: "waistCoat",
    },
    {
      id: 95,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/25.jpeg",
   
      category: "waistCoat",
    },
    {
      id: 96,
      name: "Chicken Kari Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/26.png",

      category: "waistCoat",
    },
    {
      id: 97,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/27.jpeg",
     
      category: "waistCoat",
    },
    {
      id: 98,
      name: "KM Mor Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/28.png",

      category: "waistCoat",
    },
    {
      id: 99,
      name: "A-B Dori Pink Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/29.jpeg",

      category: "waistCoat",
    },
    {
      id: 100,
      name: "Green Tropical Waisctoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/30.jpeg",
      category: "waistCoat",
    },
    {
      id: 101,
      name: "Atlas Waistcoat",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/31.jpeg",
      category: "waistCoat",
    }
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

export default  WaistCoat;
