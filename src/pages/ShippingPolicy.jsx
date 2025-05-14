import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4 sm:px-6 lg:px-8 pt-44">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-playfair font-extrabold text-center text-gray-900 mb-8 tracking-tight">
          Shipping Policy
        </h1>
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-800 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            1. Shipment Charges
          </h2>
          <p className="text-gray-600">
            Shipment charges will be added at the time of checkout as per location and weight of the outfit.
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            2. Duties & Customs
          </h2>
          <p className="text-gray-600">
            For any duty and customs at the destination country, it will be the client’s responsibility.
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            3. Made-to-Order Articles
          </h2>
          <p className="text-gray-600">
            All made-to-order articles will be processed within 8 - 12 weeks, excluding weekends and public holidays. The time stated is based on Pakistan Time (PST/GMT +5 hours).
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            4. Ready to Ship Articles
          </h2>
          <p className="text-gray-600">
            All ready-to-ship articles will be delivered within 7 days.
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            5. Nationwide Deliveries
          </h2>
          <p className="text-gray-600">
            For nationwide deliveries, once ready, your order should reach you within approximately 5-7 business days.
          </p>

          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
            6. International Deliveries
          </h2>
          <p className="text-gray-600">
            For all international deliveries, the time frame is stipulated by our logistics partners and affiliates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
