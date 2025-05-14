import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newArrivals = [
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

const NewArrivals = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 relative">
      {/* Full-width Lines and Centered Heading */}
      <div className="flex items-center mb-6">
        <div className="border-t border-gray-400 flex-grow"></div>
        <Link to="/new-in">
  <h2
    className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 uppercase mx-4 whitespace-nowrap cursor-pointer hover:underline"
    style={{ fontFamily: "Josefin Sans, Arial, sans-serif" }}
  >
    New Arrivals
  </h2>
</Link>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4} // Default: 4 items per row
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 4 },  // Desktop: 4 items per row
            768: { slidesPerView: 2 },   // Tablet: 2 items per row
            480: { slidesPerView: 2 },   // Mobile: 2 items per row
            0: { slidesPerView: 2 },     // For mobile below 480px, force 2 items
          }}
          className="px-5"
        >
          {newArrivals.map((item) => (
            <SwiperSlide key={item.id} className="text-center">
              <Link to={`/product/${item.id}`} className="relative block overflow-hidden group">
                {/* Main Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

                {/* Hover Image (Appears on hover) */}
                <img
                  src={item.hoverImage}
                  alt={item.name}
                  className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity delay-100 duration-300 ease-in-out group-hover:opacity-100"
                />

                {/* White Flash Effect (Disappears Before Image Change) */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-75 group-hover:delay-75"></div>
              </Link>

              <p 
  className="mt-3 pb-9" 
  style={{
    fontFamily: '"Josefin Sans", Arial, "sans-serif"',
    fontSize: '12px',
    lineHeight: '22px',
    fontWeight: '500',
    letterSpacing: 'normal',
    color: '#232323'
  }}
>
  {item.name}
</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Hidden on Mobile) */}
        <button className="swiper-prev absolute top-1/2 left-3 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-md hover:bg-gray-800 transition z-50 hidden md:block">
          ❮
        </button>
        <button className="swiper-next absolute top-1/2 right-3 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-md hover:bg-gray-800 transition z-50 hidden md:block">
          ❯
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
