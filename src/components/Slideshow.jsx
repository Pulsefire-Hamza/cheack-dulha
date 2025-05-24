import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const Slideshow = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const desktopSlides = [
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/WhatsApp%20Image%202025-05-13%20at%204.10.28%20PM.jpeg", link: "/product/137" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/WhatsApp%20Image%202025-05-13%20at%204.10.28%20PM%20(1).jpeg", link: "/product/222" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/WhatsApp%20Image%202025-05-13%20at%204.10.28%20PM%20(2).jpeg", link: "/product/8" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/WhatsApp%20Image%202025-05-13%20at%204.10.29%20PM.jpeg", link: "/product/103" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/WhatsApp%20Image%202025-05-13%20at%204.10.29%20PM%20(1).jpeg", link: "/product/269" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/WhatsApp%20Image%202025-05-13%20at%204.10.29%20PM%20(2).jpeg", link: "/product/14" },
  ];

  const mobileSlides = [
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%201st.jpeg", link: "/product/138" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%20slideshow%20(7).jpeg", link: "/product/137" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%20slideshow%20(3).jpeg", link: "/product/8" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%20slideshow%20(1).jpeg", link: "/product/222" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%20slideshow%20(4).jpeg", link: "/product/269" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%20slideshow%20(5).jpeg", link: "/product/20" },
    { src: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Slideshow/mob%20slideshow%20(6).jpeg", link: "/product/14" },
  ];

  const slidesToShow = isMobile ? mobileSlides : desktopSlides;

  return (
    <div className="w-full md:pt-32 pt-28">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full"
      >
        {slidesToShow.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slideshow;
