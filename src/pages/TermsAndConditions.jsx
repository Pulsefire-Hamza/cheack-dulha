import React from 'react';

function TermsAndConditions() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4 sm:px-6 lg:px-8 pt-44">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-playfair font-extrabold text-center text-gray-900 mb-8 tracking-tight">
          Terms and Conditions
        </h1>
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-800 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            1. Size Responsibility
          </h2>
          <p className="text-gray-600">
            We don’t take any responsibility for sizes, we make as per the provided measurements.
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            2. Delivery Charges & Damages
          </h2>
          <p className="text-gray-600">
            Delivery charges are separate and we don’t bear any damages caused during delivery.
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            3. Delivery Time and Rate
          </h2>
          <p className="text-gray-600">
            Delivery time and rate vary company to company and we only recommend you to choose either from DHL, UPS, or FedEx.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
