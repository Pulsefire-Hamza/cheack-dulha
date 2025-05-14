import React, { useEffect, useState } from 'react';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);  // Trigger the fade-in effect when the component mounts
  }, []);

  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      {/* Content Section */}
      <div className="text-center">
        {/* About Header */}
        <div className={`transition-opacity duration-1000 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-5xl font-playfair font-extrabold text-gray-900 pt-20 leading-tight">
            About Us
          </h1>
          <p className="text-xl font-playfair text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Dulha House, as a brand, has an inherently Pakistani soul. It aims to design exquisite ensembles that preserve traditions and pay homage to the supreme craftsmanship of Pakistan. Established in 1992, the brand earned success for its tasteful take on timeless silhouettes and detailed handwork. From haute couture to heavily worked to daintily embellished, the brand is on a mission to help you build an ageless wardrobe befit for any and every occasion.
          </p>
        </div>

        {/* Outlet Photo */}
        <div className={`flex justify-center mb-16 transition-opacity duration-1000 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>
        <img
    src="https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/cropped-dulah%20logo%20%20(1).PNG"
    alt="Dulha House Outlet"
    class="w-1/2 max-w-xs rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl"
/>
        </div>
      </div>
    </div>
  );
}

export default About;
