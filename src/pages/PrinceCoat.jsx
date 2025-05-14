import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const PrinceCoat = () => {
  const products = [
    {
      "id": 12,
      "name": "COV Heavy Coat",
      "image": "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20I%20-%20Prince%20Coats%2F1%20(1).jpeg?alt=media&token=c74bee6e-1697-497d-9e5a-1354150077ea",
      "hoverImage": "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20I%20-%20Prince%20Coats%2F1%20(2).jpeg?alt=media&token=fc679f4f-1d6c-40bb-8ff5-409a40523af5",
      "category": "priceCoat"
    },
    {
      "id": 13,
      "name": "Purple Dori Jaal",
      "image": "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20I%20-%20Prince%20Coats%2F2%20(1).jpeg?alt=media&token=6acd18f0-20c4-4b32-a7c7-b1ad1927981e",
      "hoverImage": "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20I%20-%20Prince%20Coats%2F2%20(3).jpeg?alt=media&token=5764f0dc-107f-44e7-bf2b-fed56f204be0",
      "category": "priceCoat"
    },
    {
      "id": 14,
      "name": "KM Up Down Motif",
      "image": "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20I%20-%20Prince%20Coats%2F3%20(1).jpeg?alt=media&token=465a92b6-eaef-461e-b409-067706e1e746",
      "hoverImage": "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumaan%20-%20VOL%20I%20-%20Prince%20Coats%2F3%20(2).jpeg?alt=media&token=27918e85-756e-4c84-9d85-31b97ae4304f",
      "category": "priceCoat"
    },
    {
      id: 69,
      name: "Machine Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumman%20Vol%202%20Prince%20Coat%2FPrince%20coat%201%20(2).jpeg?alt=media&token=da399976-96c0-499f-a3d2-5cd558acb105",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumman%20Vol%202%20Prince%20Coat%2FPrince%20coat%201%20(3).jpeg?alt=media&token=272c2e53-7e1e-4b45-a8e2-4393e6fe3aa5",
      category: "priceCoat",
    },
    {
      id: 70,
      name: "Heavy Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumman%20Vol%202%20Prince%20Coat%2Fprince%20caot%202%20(2).jpeg?alt=media&token=32056cad-4fc9-4258-b656-289fb7ede32b",
      hoverImage:"https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGumman%20Vol%202%20Prince%20Coat%2Fprince%20caot%202%20(3).jpeg?alt=media&token=a54c5212-02bc-49f0-91c5-8eef18ee327b",
      category: "priceCoat",
    },
    {
      id: 103,
      name: "Gumaan Sheesh Mehal",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image:        "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FG%20VOL%202%20PC%20(2).jpeg?alt=media&token=75743cb2-4269-4dbc-8075-176c5a28fad7",
      hoverImage:  "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FG%20VOL%202%20PC%20(1).jpeg?alt=media&token=43aa8990-8f21-45ec-88ae-3130f82ab68d",
      category: "priceCoat",
    },
    {
      id: 104,
      name: "Gumaan KM Side Motif",
      price: "27,800 PKR",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image:        "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGUMMANVOL2%20(4).jpeg?alt=media&token=acd540e7-518c-4d4a-99d3-03be53278415",
      hoverImage:  "https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Dulha%2FGuman%2FGUMMANVOL2%20(3).jpeg?alt=media&token=532cf953-48d1-414d-a5d0-65867c42f07d",
      category: "priceCoat",
    },
  
    {
      id: 43,
      name: "Side Motif Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/1.jpeg",
      category: "priceCoat",
    },
    {
      id: 44,
      name: "Massouri Two Tone Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/2.jpeg",
      category: "priceCoat",
    },
    {
      id: 45,
      name: "Suiting Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/3.jpeg",
      category: "priceCoat",
    },
    {
      id: 46,
      name: "FS Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/4.jpeg",
      category: "priceCoat",
    },
    {
      id: 47,
      name: "Rust Touch Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/5.jpeg",
      category: "priceCoat",
    },
    {
      id: 48,
      name: "Side Motif Krundy Two Tone ",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/6.jpeg",
      category: "priceCoat",
    },
    {
      id: 49,
      name: "COV-2 Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/7.jpeg",
      category: "priceCoat",
    },
    {
      id: 50,
      name: "Self Printed Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/8.jpeg",
      category: "priceCoat",
    },
    {
      id: 51,
      name: "Andrakha Style Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/9.jpeg",
      category: "priceCoat",
    },
    {
      id: 52,
      name: "Self Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/10.jpeg",
      category: "priceCoat",
    },
    {
      id: 53,
      name: "R-P 1 Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/11.jpeg",
      category: "priceCoat",
    },
    {
      id: 54,
      name: "AB Ari Mehndi Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/12.jpeg",
      category: "priceCoat",
    },
    {
      id: 55,
      name: "AB-MNR Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/13.jpeg",
      category: "priceCoat",
    },
    {
      id: 56,
      name: "Side Motif Rufi Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/14.jpeg",
      category: "priceCoat",
    },
    {
      id: 57,
      name: "Maroon Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/15.jpeg",
      category: "priceCoat",
    },
    {
      id: 58,
      name: "Suiting Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/16.jpeg",
      category: "priceCoat",
    },
    {
      id: 59,
      name: "Khaddar Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/17.jpeg",
      category: "priceCoat",
    },
    {
      id: 60,
      name: "Side Motif Mor Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/18.jpeg",
      category: "priceCoat",
    },
    
    {
      id: 62,
      name: "Sky Blue Atlas Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/19.jpeg",
      category: "priceCoat",
    },
    {
      id: 63,
      name: "Green Atlas Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/20.jpeg",
      category: "priceCoat",
    },
    {
      id: 64,
      name: "Side Motif Off-white Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/21.jpeg",
      category: "priceCoat",
    },
    {
      id: 65,
      name: "ADORI Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/22.jpeg",
      category: "priceCoat",
    },
    {
      id: 66,
      name: "Rusty Self Embroidered Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/23.jpeg",
      category: "priceCoat",
    },
    {
      id: 67,
      name: "3-D Black Prince Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/24.jpeg",
      category: "priceCoat",
    },
    {
      id: 68,
      name: "6 Green Atlas Motif Plain Coat",
      description: "A sleek modern grey sherwani designed for contemporary style enthusiasts.",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/25.jpeg",
      category: "priceCoat",
    },

  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleWhatsAppClick = (product) => {
    // Send product name and image URL to WhatsApp
    const message = `Hello, I am interested in the ${product.name}. Please provide more details.\n\nImage: ${product.image}`;
    const url = `https://wa.me/923444447759?text=${encodeURIComponent(message)}`;
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
</h2>
              <button
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

export default PrinceCoat;
