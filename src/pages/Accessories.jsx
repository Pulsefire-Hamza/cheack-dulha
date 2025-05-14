import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const Accessories = () => {

  const products = [
    {
        id: 130,
        name: "‘Hatf’ Shoes",
        image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%201%20(1).jpeg",
        hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%201%20(2).jpeg",
      },
       {
        id: 131,
        name: "‘Shaheen’ Shoes",
        image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%202%20(1).jpeg",
        hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%202%20(2).jpeg",
      },
       {
      
        id: 132,
        name: "‘Nasr’ Shoes",
        image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%203%20(1).jpeg",
        hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%203%20(2).jpeg",
      }, 

      {
        id: 133,
        name: "‘Fateh’ Shoes",
        image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%204%20(1).jpeg",
        hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%204%20(2).jpeg",
      },

       {
        id: 134,
        name: "‘Babar’ Khussa",
        image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%205%20(1).jpeg",
        hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%205%20(2).jpeg",
      },
      
    {
      id: 135,
      name: "‘Raad’ Khussa (Saleem-Shahi)",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%206%20(2).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%206%20(1).jpeg",
    },
    {
      id: 136,
      name: "‘Harbay’ Khussa (Saleem-Shahi)",
      image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%207%20(2).jpeg",
      hoverImage: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%207%20(1).jpeg",
    },
   
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

export default Accessories;
