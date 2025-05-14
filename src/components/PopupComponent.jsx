import React, { useState, useEffect } from 'react';

const PopupComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Check localStorage to see if the user has seen the popup before
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsPopupVisible(true);
      localStorage.setItem('hasVisited', 'true'); // Mark that the user has visited
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false); // Close the popup
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 opacity-100 pt-24">
          {/* Image displayed */}
          <div className="relative">
            <img 
              src="https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/popup.jpeg" 
              alt="Popup" 
              className="w-[100%] max-w-[600px] h-auto rounded-lg" 
            />
            {/* Smaller close button with better styling */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-900 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupComponent;
