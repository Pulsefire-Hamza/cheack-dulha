import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Album3 = () => {
  const albums = [     
    { id: 69, image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(2).jpeg" },
    { id: 31, image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(3).jpeg" },
    { id: 32, image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(3).jpeg" },
    {
      "id": 26,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(2).jpeg"
    },
    {
      "id": 27,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(2).jpeg"
    },
    {
      "id": 28,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(4).jpeg"
    },
    {
      "id": 29,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(1).jpeg"
    },
    {
      "id": 30,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(1).jpeg"
    },
    {
      "id": 33,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(3).jpeg"
    },
    {
      "id": 70,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(2).jpeg"
    },
    {
      "id": 105,
      "image": "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(2).jpeg"
    }
    
  ]; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % albums.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [albums.length]);

  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const childWidth = container.children[0]?.offsetWidth || 0;
      container.scrollTo({
        left: childWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative bg-white py-6 w-full">
      {/* Title */}
      <div className="px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center w-full">
                 <Link to="/nafast/volume-2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 uppercase text-left mx-0 cursor-pointer hover:underline"
                style={{ fontFamily: "Josefin Sans, Arial, sans-serif" }}
              >
              Nafasat
              </h2>
            </Link>
            <span className="flex-grow border-t border-[#D3D3D3] ml-2 w-full"></span>
          </div>
        </div>
      </div>

      {/* Volume title */}
      <div className="flex items-center justify-center mt-2">
        <span className="block w-6 sm:w-8 md:w-16 border-t border-[#D3D3D3]"></span>
        <h3
          className="text-xl sm:text-2xl md:text-2xl font-light text-gray-800 mx-4"
          style={{ fontFamily: "Josefin Sans, Arial, sans-serif" }}
        >
          Volume 2
        </h3>
        <span className="block w-6 sm:w-8 md:w-16 border-t border-[#D3D3D3]"></span>
      </div>

      {/* Mobile scrollable slider */}
      <div className="md:hidden mt-4 px-1">
        <div
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {albums.map((album) => (
            <div
              key={album.id}
              className="snap-center shrink-0 w-[60%] relative rounded-xl"
            >
              <Link to={`/product/${album.id}`}>
                <div className="relative w-full" style={{ paddingTop: "150%" }}>
                  <img
                    src={album.image}
                    alt={`Album ${album.id}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid showing only 3 images */}
      <div className="hidden md:grid mt-6 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {albums.slice(0, 3).map((album) => (
          <div
            key={album.id}
            className="text-center overflow-hidden transition-transform duration-1000 ease-in-out"
          >
            <Link to={`/product/${album.id}`}>
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <div className="relative w-full" style={{ paddingTop: "110%" }}>
                  <img
                    src={album.image}
                    alt={`Album ${album.id}`}
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-xl group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album3;
