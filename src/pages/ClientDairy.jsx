import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ClientDairy = () => {
  const products = [
    {
      id: 3,
      name: "Client Photo 1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM.jpeg"
      ],
    },
    {
      id: 1,
      name: "Client Photo 2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/same%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/same%20(2).jpeg",
      ],
    },
    {
      id: 2,
      name: "Client Photo 3",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(1).jpeg",
      ],
    },

    {
      id: 4,
      name: "Client Photo 4",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(3).jpeg",
      ],
    },
    {
      id: 5,
      name: "Client Photo 5",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(5).jpeg",
      ],
    },
    {
      id: 6,
      name: "Client Photo 6",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(6).jpeg",
      ],
    },
    {
      id: 7,
      name: "Client Photo 7",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(7).jpeg",
      ],
    },
    {
      id: 8,
      name: "Client Photo 8",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(8).jpeg",
      ],
    },
    {
      id: 9,
      name: "Client Photo 9",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(9).jpeg",
      ],
    },
    {
      id: 10,
      name: "Client Photo 10",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(10).jpeg",
      ],
    },  {
      id: 11,
      name: "Client Photo 11",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(11).jpeg",
      ],
    },
    {
      id: 12,
      name: "Client Photo 12",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(12).jpeg",
      ],
    },
    {
      id: 13,
      name: "Client Photo 13",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(13).jpeg",
      ],
    },
    {
      id: 14,
      name: "Client Photo 14",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(14).jpeg",
      ],
    },
    {
      id: 15,
      name: "Client Photo 15",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(15).jpeg",
      ],
    },
    {
      id: 16,
      name: "Client Photo 16",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(16).jpeg",
      ],
    },
    {
      id: 17,
      name: "Client Photo 17",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-04-30%20at%202.34.35%20AM%20(17).jpeg",
      ],
    },
    {
      id: 18,
      name: "Client Photo 18",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/cd%20remain%20(1).jpeg",
      ],
    },
    {
      id: 19,
      name: "Client Photo 19",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/cd%20remain%20(3).jpeg",
      ],
    },
    {
      id: 20,
      name: "Client Photo 20",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/cd%20remain%20(2).jpeg",
      ],
    },
       {
      id: 21,
      name: "Client Photo 21",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-05-02%20at%204.20.17%20PM%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-05-02%20at%204.20.17%20PM.jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-05-02%20at%204.20.17%20PM%20(2).jpeg"
      ],
    },
     {
      id: 22,
      name: "Client Photo 22",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-05-09%20at%206.03.05%20PM.jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/CLIENT-DAIRY/WhatsApp%20Image%202025-05-09%20at%206.02.25%20PM.jpeg",
      ],
    },
  ];

  const allImages = products.flatMap(product => product.images);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setModalImageIndex((modalImageIndex + 1) % allImages.length);
  };

  const handlePrevImage = () => {
    setModalImageIndex((modalImageIndex - 1 + allImages.length) % allImages.length);
  };

  const generateWhatsAppMessage = (product) => {
    const message = `
      Product Name: ${product.name}
      Product URL: ${window.location.origin}/product/${product.id}
      Image URL: ${product.images[0]}
    `;
    return `https://wa.me/+923444447759?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-32 md:pt-44 pb-20 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 uppercase text-center mx-auto" style={{ fontFamily: 'Josefin Sans, Arial, sans-serif' }}>
        Client Diary
      </h2>
         
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Clients to remember, Outfits to cherish
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, productIndex) => (
          <div key={product.id} className="flex flex-col items-center text-center cursor-pointer">
            <div className="relative group w-full h-auto overflow-hidden"
              onClick={() => handleImageClick(
                // Clicked image's index in full images array
                products.slice(0, productIndex).reduce((acc, p) => acc + p.images.length, 0)
              )}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className={`w-128 h-128 object-cover mb-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${product.images.length === 2 ? 'group-hover:scale-105 group-hover:shadow-2xl' : ''}`}
              />
              {product.images.length === 2 && (
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
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
              <a
                href={generateWhatsAppMessage(product)}
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

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all" onClick={closeModal}>
          <div className="relative bg-transparent rounded-lg p-0 w-full max-w-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            {/* Prev Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 md:left-8 text-white bg-[#333] hover:bg-[#555] transition duration-300 rounded p-2 md:p-3 shadow-md"
              aria-label="Previous Image"
            >
              <span className="text-xl md:text-2xl">&#8592;</span>
            </button>

            {/* Image */}
            <img
              src={allImages[modalImageIndex]}
              alt="Client"
              className="w-full h-auto object-contain max-h-[90vh] rounded-lg mx-8 md:mx-12"
            />

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 md:right-8 text-white bg-[#333] hover:bg-[#555] transition duration-300 rounded p-2 md:p-3 shadow-md"
              aria-label="Next Image"
            >
              <span className="text-xl md:text-2xl">&#8594;</span>
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl font-bold bg-[#333] hover:bg-[#555] transition duration-300 rounded p-1.5 md:p-2 shadow-md"
              aria-label="Close Modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDairy;
