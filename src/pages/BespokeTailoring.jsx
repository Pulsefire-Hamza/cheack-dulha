import React, { useState } from 'react';

const BespokeTailoring = () => {
  const [measurements, setMeasurements] = useState({
    neck: '',
    shoulder: '',
    chest: '',
    tummy: '',
    hip: '',
    sleeves: '',
    sherwaniLength: '',
    princeCoatLength: '',
    waistCoatLength: '',
    waist: '',
    trouserShalwarLength: '',
    bottom: '',
    shoeSize: '',
    headCircumference: '',
  });

  const [shoeSizeUnit, setShoeSizeUnit] = useState('inches'); // Add state for shoe size unit

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShoeSizeUnitChange = (e) => {
    setShoeSizeUnit(e.target.value); // Update the shoe size unit (Inches, Euro, UK, US)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out the empty values and create the message
    let message = 'Hello, here are my measurements for Bespoke Tailoring:\n';

    Object.keys(measurements).forEach((key) => {
      if (measurements[key]) {
        // Handle shoe size separately for unit omission if it's inches
        if (key === 'shoeSize') {
          const shoeSizeMessage = shoeSizeUnit !== 'inches' 
            ? `${measurements[key]} ${shoeSizeUnit.toUpperCase()}`
            : measurements[key];  // Omit unit if inches
          message += `- Shoe Size: ${shoeSizeMessage}\n`;
        } else {
          message += `- ${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: ${measurements[key]} inches\n`;
        }
      }
    });

    const phoneNumber = '+923444447759';  // Phone number to send the message to
    const encodedMessage = encodeURIComponent(message);  // Encode the message to ensure it works in the URL

    // Open WhatsApp with the pre-filled message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');  // Open WhatsApp in a new tab
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 pt-48">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-light text-center text-black mb-6 tracking-wide leading-tight font-josefin whitespace-nowrap">
          Bespoke Tailoring
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Measurements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="neck" className="text-sm font-medium text-gray-700">Neck</label>
              <input
                type="number"
                name="neck"
                value={measurements.neck}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="shoulder" className="text-sm font-medium text-gray-700">Shoulder</label>
              <input
                type="number"
                name="shoulder"
                value={measurements.shoulder}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
          </div>

          {/* Chest, Tummy, Hip, and Sleeves Measurements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="chest" className="text-sm font-medium text-gray-700">Chest</label>
              <input
                type="number"
                name="chest"
                value={measurements.chest}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tummy" className="text-sm font-medium text-gray-700">Tummy</label>
              <input
                type="number"
                name="tummy"
                value={measurements.tummy}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
          </div>

          {/* Other Measurements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="hip" className="text-sm font-medium text-gray-700">Hip</label>
              <input
                type="number"
                name="hip"
                value={measurements.hip}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sleeves" className="text-sm font-medium text-gray-700">Sleeves</label>
              <input
                type="number"
                name="sleeves"
                value={measurements.sleeves}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
          </div>

          {/* Length Measurements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="sherwaniLength" className="text-sm font-medium text-gray-700">Sherwani Length</label>
              <input
                type="number"
                name="sherwaniLength"
                value={measurements.sherwaniLength}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="princeCoatLength" className="text-sm font-medium text-gray-700">Prince Coat Length</label>
              <input
                type="number"
                name="princeCoatLength"
                value={measurements.princeCoatLength}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="waistCoatLength" className="text-sm font-medium text-gray-700">Waist Coat Length</label>
              <input
                type="number"
                name="waistCoatLength"
                value={measurements.waistCoatLength}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter measurement in inches"
              />
            </div>
          </div>

          {/* Waist, Trouser / Shalwar Length, and Bottom Section */}
          <div className="border-t pt-6 mt-6">
            <h2 className="text-2xl font-light text-gray-800 mb-4">Waist, Trouser/Shalwar, and Bottom</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="waist" className="text-sm font-medium text-gray-700">Waist</label>
                <input
                  type="number"
                  name="waist"
                  value={measurements.waist}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter waist measurement in inches"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="trouserShalwarLength" className="text-sm font-medium text-gray-700">Trouser/Shalwar Length</label>
                <input
                  type="number"
                  name="trouserShalwarLength"
                  value={measurements.trouserShalwarLength}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter length in inches"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <label htmlFor="bottom" className="text-sm font-medium text-gray-700">Bottom</label>
              <input
                type="number"
                name="bottom"
                value={measurements.bottom}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter bottom measurement in inches"
              />
            </div>
          </div>

          {/* Shoe Size and Head Circumference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col">
              <label htmlFor="shoeSize" className="text-sm font-medium text-gray-700">Shoe Size</label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  name="shoeSize"
                  value={measurements.shoeSize}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={
                    shoeSizeUnit === 'inches' ? "Enter shoe size in inches" :
                    shoeSizeUnit === 'euro' ? "Enter shoe size in Euro" :
                    shoeSizeUnit === 'uk' ? "Enter shoe size in UK" :
                    "Enter shoe size in US"
                  }
                />
                <select
                  value={shoeSizeUnit}
                  onChange={handleShoeSizeUnitChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="inches">Inches</option>
                  <option value="euro">Euro</option>
                  <option value="uk">UK</option>
                  <option value="us">US</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="headCircumference" className="text-sm font-medium text-gray-700">Head Circumference</label>
              <input
                type="number"
                name="headCircumference"
                value={measurements.headCircumference}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter head circumference in inches"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500 font-josefin">
            All sizes should be taken in Inches and In Circumference. For detailed measurements guidance video, please inquire us on our WhatsApp number.
                      <br />
             Extra charges will be applied for size above Chest: 42  Length: 45
          </p>

          <button
            type="submit"
            className="w-full py-3 text-[14px] font-medium text-[#232323] text-center border border-gray-500 rounded-none bg-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out font-[Josefin Sans, Arial]"
          >
            Submit Measurements
          </button>
        </form>
      </div>
    </div>
  );
};

export default BespokeTailoring;
