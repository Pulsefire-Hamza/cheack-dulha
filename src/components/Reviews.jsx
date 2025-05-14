import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  // Make sure to import slick theme for better default styling

const testimonials = [
  {
    name: "Asma Siddique",
    city: "Ontario - Canada",
    role: "International Client",
    rating: 5,
    review:
      " Package received. Both Sherwanis & waist coat fits perfectly. We liked the quality & stitching. We will definitely refer you to  our friends. Thank you so much!.",
    flag: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/can.png",
  },
  {
    name: "Rabbeya Khaled",
    city: "USA",
    role: "International client",
    rating: 5,
    review: "Recently placed an order at dulha house and I am more than satisfied with their service! They responded very quickly and were able to get the order ready before time. Reasonable prices, Excellent customer service and A+ for their stitching & fabric quality. I would definitely recommend them.",
    flag: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/USA.png",
  },
  {
    name: "Prof. Javaid Awan",
    city: "Lahore",
    role: "Local Client",
    rating: 5,
    review:
      "I recently purchased my son's wedding attire from Dulha House, The Mall Road Lahore, and I must say, the experience was exceptional! From the quality of the fabric to the intricate craftsmanship, everything exceeded my expectations. The designs were elegant, and the fitting was perfect.\n\nA special mention to Mr. Faizan, whose professionalism, commitment, and customer service were remarkable. He personally guided my son through the selection process, ensuring that every detail matched his preferences. His keen eye for fashion and commitment to customer satisfaction made the entire experience smooth and enjoyable.\n\nIf you're looking for premium wedding wear in Lahore, I highly recommend Dulha House Mall Road Lahore. Their attention to detail, top-notch quality, and excellent customer service make them a standout choice for grooms-to-be.",
    flag: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg",
  },
  {
    name: "Kinza Butt ",
    city: "Faisalabad - Pakistan",
    role: "Local Client",
    rating: 5,
    review: "I had an amazing experience shopping at Dulha House for my Sherwani! The quality of the fabric and craftsmanship is exceptional. The staff was incredibly helpful and guided me through the entire process, ensuring I found the perfect Sherwani for my big day. They have a wide range of designs, and I was able to customize it to my exact preferences. The attention to detail is unmatched, and the fit was perfect! I received so many compliments at my wedding. Highly recommend Dulha House for anyone looking for the best in wedding attire.",
    flag: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg",
  },
  {
    name: "Asam Ahmed",
    city: "United Kingdom",
    role: "International client",
    rating: 5,
    review: "Experience from start to finish was top top class. Ordered my wedding sherwani before i got to lahore and received top class customer service from Dawood bhai. Then received a friendly welcome and service from the whole team at my trial. Also the final product was on another level to any other you would find in Lahore. Dulha house are the best on mall road you can see nobody else in the whole area has such quality work.",
    flag: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/UK.png",
  },
];

const TestimonialCard = ({ item }) => {
  const [showFull, setShowFull] = useState(false);
  const cardRef = useRef(null);

  const maxChars = 250;
  const isLong = item.review.length > maxChars;
  const reviewText = showFull
    ? item.review
    : item.review.slice(0, maxChars) + (isLong ? "..." : "");

  const handleToggle = () => {
    setShowFull(!showFull);
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div ref={cardRef} className="p-3 h-full">
      <div className="bg-white border border-gray-200 shadow-md rounded-xl h-full min-h-[360px] flex flex-col justify-between p-6 relative overflow-hidden">
        <div className="flex justify-center mb-3">
          <img
            src={item.flag}
            alt="Customer Flag"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        <div className="flex justify-center mb-3">
          {[...Array(item.rating)].map((_, i) => (
            <FaStar key={i} className="text-green-600 text-sm" />
          ))}
        </div>

        <FaQuoteLeft className="text-xl text-gray-300 absolute top-4 left-4" />

        <div className="flex-1 flex items-center justify-center text-center">
          <p className="text-sm text-gray-700 italic whitespace-pre-line">
            {reviewText}
          </p>
        </div>

        {isLong && (
          <div className="text-center mt-2">
            <button
              onClick={handleToggle}
              className="text-green-600 text-xs underline"
            >
              {showFull ? "See Less" : "See More"}
            </button>
          </div>
        )}

        <div className="mt-4 text-center">
          <h3 className="text-green-700 font-semibold">
            {item.name}
            <span className="text-gray-500 text-sm"> ({item.city})</span>
          </h3>
          <p className="text-xs text-gray-500">{item.role}</p>
        </div>

        <FaQuoteRight className="text-xl text-gray-300 absolute bottom-4 right-4" />
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: true, // Enable the dots for navigation
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // Disable default arrows (Previous/Next)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center mb-6">
        <div className="border-t border-gray-400 flex-grow"></div>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 uppercase mx-4 whitespace-nowrap"
          style={{ fontFamily: "Josefin Sans, Arial, sans-serif" }}
        >
          Reviews
        </h2>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </Slider>

      <div className="text-center mt-10">
        <Link
          to="/reviews-page"
          className="text-black-600 text-lg font-semibold underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default TestimonialSlider;
