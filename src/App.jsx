import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // 👈 Import Toaster here

import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';
import Album1 from './components/Album1';
import Album2 from './components/Album2';
import Album3 from './components/Album3';
import Album4 from './components/Album4';
import NewIn from './pages/NewIn';
import Home from './pages/Home';
import Guman from './pages/Guman';
import Nafast from './pages/Nafast';
import About from './pages/About';
import PrinceCoat from './pages/PrinceCoat';
import WaistCoat from './pages/WaistCoat';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import GumaanVol1 from './pages/GumaanVol1';
import GumaanVol2 from './pages/GumaanVol2';
import NafasatVol2 from './pages/NafasatVol2';
import Afsana from './pages/Afsana';
import NafasatVol1 from './pages/NafasatVol1';
import TermsAndConditions from './pages/TermsAndConditions'; 
import ShippingPolicy from './pages/ShippingPolicy';
import Sherwani from './pages/Sherwani';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppIcon from './components/WhatsAppIcon';
import BespokeTailoring from './pages/BespokeTailoring';
import Reviews from './components/Reviews';
import ReviewsPage from './pages/ReviewsPage';
import ClientDairy from './pages/ClientDairy';
import Accessories from './pages/Accessories';

const App = () => {
  return (
    <Router>
      <div>
        {/* 🌟 Global Toaster */}
        <Toaster 
  position="bottom-right" 
  reverseOrder={false}
  toastOptions={{
    duration: 3000,
    style: {
      background: '#232323',
      color: '#fff',
      fontFamily: 'Josefin Sans, Arial',
      fontSize: '14px'
    },
  }} 
/>


        <div>
          <Navbar />
          <ScrollToTop />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<><Slideshow /><NewArrivals /><Album2 /><Album4 /><Album1 /><Album3 /> <Reviews /></>} />
              <Route path="/new-in" element={<NewIn />} />
              <Route path="/new-in/afsanas" element={<Afsana />} />
              <Route path="/home" element={<Home />} />
              <Route path="/guman" element={<Guman />} />
              <Route path="/guman/volume-1" element={<GumaanVol1 />} />
              <Route path="/guman/volume-2" element={<GumaanVol2 />} />
              <Route path="/nafast/volume-1" element={<NafasatVol1 />} />
              <Route path="/nafast/volume-2" element={<NafasatVol2 />} />
              <Route path="/nafast" element={<Nafast />} />
              <Route path="/about" element={<About />} />
              <Route path="/prince-coat" element={<PrinceCoat />} />
              <Route path="/sherwani" element={<Sherwani />} />
              <Route path="/waist-coat" element={<WaistCoat />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/bespoke-tailoring" element={<BespokeTailoring />} />
              <Route path="/reviews-page" element={<ReviewsPage />} />
              <Route path="/client-dairy" element={<ClientDairy />} />
              <Route path="/accessories" element={<Accessories />} />


            </Routes>
          </main>

          <WhatsAppIcon />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
