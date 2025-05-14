import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black text-center pt-6 pb-0 border-t">

{/* Links Section */}
<div className="text-sm mb-6 flex justify-center items-center mt-2 flex-wrap gap-4 sm:gap-6">
  <div className="flex w-full justify-center sm:w-auto gap-4">
    {/* Center "Client Dairy" in the first row with less bottom margin */}
    <a href="/client-dairy" className="relative group text-center sm:no-underline underline sm:underline-none w-full sm:w-auto mt-4 sm:mt-0">
      Client Diary
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  </div>

  <div className="flex w-full justify-center sm:w-auto gap-4 mt-4 sm:mt-0">
    <a href="/reviews-page" className="relative group text-center sm:no-underline underline sm:underline-none hidden sm:block">
      Testimonials
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
    <a href="/about" className="relative group text-center sm:no-underline underline sm:underline-none">
      About Us
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
    <a href="/contact" className="relative group text-center sm:no-underline underline sm:underline-none">
      Contact Us
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  </div>

  <div className="flex w-full justify-center sm:w-auto gap-4 mt-4 sm:mt-0">
    <a href="/terms-and-conditions" className="relative group text-center sm:no-underline underline sm:underline-none">
      Terms & Conditions
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
    <a href="/shipping-policy" className="relative group text-center sm:no-underline underline sm:underline-none">
      Shipping Policy
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  </div>
</div>





      {/* Social Media Icons */}
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-3">
        <a
          href="https://www.facebook.com/dulhahouseofficial"
          className="text-black hover:text-blue-600 bg-white p-3 rounded-full"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/dulhahouseofficial/"
          className="text-black hover:text-pink-600 bg-white p-3 rounded-full"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.youtube.com/@DULHAHOUSEOFFICIAL"
          className="text-black hover:text-red-600 bg-white p-3 rounded-full"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@dulhahouseofficial?_t=ZS-8urqpV724Nm&_r=1"
          className="text-black hover:text-gray-900 bg-white p-3 rounded-full"
        >
          <FaTiktok size={24} />
        </a>
      </div>

     {/* Copyright */}
  <div className="text-center text-xs text-[#202020] font-[Josefin Sans, Arial, sans-serif] mb-2">
  © Dulha House All Rights Reserved 2025 | Developed by{" "}
  <strong>
    <a
      href="https://devrexdigital.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Devrex Digital
    </a>
  </strong>
</div>

    </footer>
  );
};

export default Footer;
