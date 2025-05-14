import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
  return (
    <div
      className="fixed right-4 bottom-16 z-50"
      title="Chat with us on WhatsApp"
    >
      <a
        href="https://wa.me/+923444447759"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl md:text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
