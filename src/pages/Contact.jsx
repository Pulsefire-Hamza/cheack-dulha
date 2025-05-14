import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 uppercase mx-4 whitespace-nowrap"
          style={{ fontFamily: "Josefin Sans, Arial, sans-serif" }}
        >
          Contact Information
        </h2>
          <p className="text-lg text-gray-600 mb-6 pt-8">
            Feel free to reach out to us via phone, email, or visit our
            location.
          </p>

          <ul className="space-y-4 text-left mx-auto max-w-lg">
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-green-600" />
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:dulhahouseofficial@gmail.com"
                className="text-green-600 hover:underline"
              >
                dulhahouseofficial@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-600" />
              <span className="font-semibold">International Call:</span>
              <a
                href="tel:+923444447759"
                className="text-green-600 hover:underline"
              >
                +923 44 444 7759
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-600" />
              <span className="font-semibold">Call for Pakistan:</span>
              <a
                href="tel:03214551465"
                className="text-green-600 hover:underline"
              >
                0321-4551465
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-600" />
              <span className="font-semibold">Address:</span>
              <div>
                DULHA HOUSE, 30-G Naqi Arcade, 71 The Mall Road, Lahore, 54000
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-green-600" />
              <span className="font-semibold">Opening Hours:</span>
              <div>
                Monday to Saturday: 12:00 PM - 10:00 PM
                <br />
                Sunday: Closed
              </div>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="pt-32">
          <div className="flex justify-center">
            <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <iframe
                className="w-full h-96 md:w-[800px] md:h-[500px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.6687516967204!2d74.3208983!3d31.560704200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b41d94e9595%3A0x7efce1fad5291f97!2sDULHA%20HOUSE!5e0!3m2!1sen!2s!4v1737584898334!5m2!1sen!2s"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/place/DULHA+HOUSE/@31.5607042,74.3208983,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline hover:text-green-800 transition"
            >
              View Larger Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
