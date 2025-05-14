import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaGoogle,
  FaTiktok
} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#303030',
      color: '#fff',
      padding: '5px 0',
      fontSize: '14px',
      fontWeight: 'normal',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'center',
      flexWrap: 'wrap',
    }}>
      {/* Call / WhatsApp */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span>Call / WhatsApp:</span>
        <a href="tel:+923444447759" style={{ color: '#66d7a1', fontWeight: 'bold', textDecoration: 'none' }}>
          +923444447759
        </a>
        <span>| Shipping Worldwide</span>
      </div>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://www.facebook.com/dulhahouseofficial/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 3px' }}>
          <FaFacebook style={{ color: '#66d7a1', fontSize: '20px' }} />
        </a>
        <a href="https://www.instagram.com/dulhahouseofficial?igsh=MWNsZXNzY3c4NzdsdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ margin: '0 3px' }}>
          <FaInstagram style={{ color: '#66d7a1', fontSize: '20px' }} />
        </a>
        <a href="https://youtube.com/@dulhahouseofficial?si=2Ai3PrhebKb_6Rc6" target="_blank" rel="noopener noreferrer" style={{ margin: '0 3px' }}>
          <FaYoutube style={{ color: '#66d7a1', fontSize: '20px' }} />
        </a>
        <a href="https://www.pinterest.com/dulhahouseofficiall/?invite_code=2823749e7a4b4a16a6b0dd10e1fad2b2&sender=842806655174521841" target="_blank" rel="noopener noreferrer" style={{ margin: '0 3px' }}>
          <FaPinterest style={{ color: '#66d7a1', fontSize: '20px' }} />
        </a>
        <a href="https://maps.app.goo.gl/wTH1VAxVpJpzCLEN9?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ margin: '0 3px' }}>
          <FaGoogle style={{ color: '#66d7a1', fontSize: '20px' }} />
        </a>
        <a href="https://www.tiktok.com/@dulhahouseofficial?_t=ZS-8urqpV724Nm&_r=1" target="_blank" rel="noopener noreferrer" style={{ margin: '0 3px' }}>
          <FaTiktok style={{ color: '#66d7a1', fontSize: '20px' }} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
