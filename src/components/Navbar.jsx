import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaGoogle,
  FaYoutube,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";

// Sample products array for search filter
const products = [
  {
    id: 1,
    name: "Afsanah Black Border",
    image:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(1).jpeg",
  },
  {
    id: 2,
    name: "Afsanah Coffee Motif",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202%20(1).jpeg",
  },
  {
    id: 3,
    name: "Afsanah Black Gold Motif",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(1).jpeg",
  },
  {
    id: 4,
    name: "Afsanah Bissino Mor ",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(1).jpeg",
  },
  {
    id: 5,
    name: "Afsanah Velvet Jaal",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(1).jpeg",
  },
  { id: 6, name: 'Afsanah Moti Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(7).jpeg' },
  { id: 7, name: 'Afsanah Machli Tanka', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(1).jpeg' },
  { id: 8, name: 'Afsanah Chicku Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(1).jpeg' },
  { id: 9, name: 'Afsanah Rose Gold Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(1).jpeg' },
  { id: 10, name: 'Afsanah Open Gown', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(5).jpeg' },
  { id: 11, name: 'Afsanah KM Heavy Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(2).jpeg' },
  { id: 12, name: 'COV Heavy Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(4).jpeg' },
  { id: 13, name: 'Purple Dori Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(3).jpeg' },
  { id: 14, name: 'KM Up Down Motif', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(4).jpeg' },
  { id: 15, name: 'KM Rust Shoulder Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(1).jpeg' },
  { id: 16, name: 'Copper Tissue Border Spray', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(4).jpeg' },
  { id: 17, name: '3-D Sea Green Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(1).jpeg' },
  { id: 18, name: 'Gumaan Cubic Bissino', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(1).jpeg' },
  { id: 19, name: 'Gumaan Dori Bazu Bissino', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(1).jpeg' },
  { id: 20, name: 'Gumaan Black Copper Motif', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(1).jpeg' },
  { id: 21, name: 'Gumaan Black Heavy Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%204%20(1).jpeg' },
  { id: 22, name: 'Gumaan Panel Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(1).jpeg' },
  { id: 23, name: 'Gumaan Open Gown', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%206%20(1).jpeg' },
  { id: 24, name: 'Gumaan K-M Mountains', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(1).jpeg' },
  { id: 25, name: '', image: '' },
  { id: 26, name: 'Skin Gold Short Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(2).jpeg' },
  { id: 27, name: 'Black Velvet Heavy Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(2).jpeg' },
  { id: 28, name: 'Black & Water Gold Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(1).jpeg' },
  { id: 29, name: 'Pista Motif Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(1).jpeg' },
  { id: 30, name: 'Black Atlas Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(1).jpeg' },
  { id: 31, name: 'Heavy Embroidered Skin Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(3).jpeg' },
  { id: 32, name: 'Golden Self Printed', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(3).jpeg' },
  { id: 33, name: 'Self Printed Jamawar', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(2).jpeg' },
  { id: 34, name: 'Mughal Motif Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%201%20(1).jpeg' },
  { id: 35, name: 'Golden Ari Jacquard Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%202%20(3).jpeg' },
  { id: 36, name: 'Border Jaal Offwhite', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%203%20(1).jpeg' },
  { id: 37, name: 'Atlas SP Design', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/por%204%20(3).jpeg' },
  { id: 38, name: '4-G Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%205%20(1).jpeg' },
  { id: 39, name: '4-G Collar Krundy', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%206%20(1).jpeg' },
  { id: 40, name: 'R-P Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%207%20(2).jpeg' },
  { id: 41, name: 'Half Bazu Payzli', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%208%20(1).jpeg' },
  { id: 42, name: '', image: '' },
  { id: 43, name: 'Side Motif Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/1.jpeg' },
  { id: 44, name: 'Massouri Two Tone Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/2.jpeg' },
  { id: 45, name: 'Suiting Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/3.jpeg' },
  { id: 46, name: 'FS Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/4.jpeg' },
  { id: 47, name: 'Rust Touch Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/5.jpeg' },
  { id: 48, name: 'Side Motif Krundy Two Tone ', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/6.jpeg' },
  { id: 49, name: 'COV-2 Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/7.jpeg' },
  { id: 50, name: 'Self Printed Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/8.jpeg' },
  { id: 51, name: 'Andrakha Style Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/9.jpeg' },
  { id: 52, name: 'Self Embroidered Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/10.jpeg' },
  { id: 53, name: 'R-P 1 Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/11.jpeg' },
  { id: 54, name: 'AB Ari Mehndi Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/12.jpeg' },
  { id: 55, name: 'AB-MNR Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/13.jpeg' },
  { id: 56, name: 'Side Motif Rufi Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/14.jpeg' },
  { id: 57, name: 'Maroon Embroidered Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/15.jpeg' },
  { id: 58, name: 'Suiting Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/16.jpeg' },
  { id: 59, name: 'Khaddar Embroidered Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/17.jpeg' },
  { id: 60, name: 'Side Motif Mor Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/18.jpeg' },
  { id: 61, name: '', image: '' },
  { id: 62, name: 'Sky Blue Atlas Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/19.jpeg' },
  { id: 63, name: 'Green Atlas Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/20.jpeg' },
  { id: 64, name: 'Side Motif Off-white Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/21.jpeg' },
  { id: 65, name: 'ADORI Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/22.jpeg' },
  { id: 66, name: 'Rusty Self Embroidered Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/23.jpeg' },
  { id: 67, name: '3-D Black Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/24.jpeg' },
  { id: 68, name: '6 Green Atlas Motif Plain Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/25.jpeg' },
  { id: 69, name: 'Machine Embroidered Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(1).jpeg' },
  { id: 70, name: 'Heavy Embroidered Prince Coat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(1).jpeg' },
  { id: 71, name: 'Tissue Border Payzli', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/1.jpeg' },
  { id: 72, name: 'Atlas Waisctoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/2.png' },
  { id: 73, name: 'Love-Story Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/3.jpeg' },
  { id: 74, name: 'F-S Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/4.jpeg' },
  { id: 75, name: 'Offwhite Suiting Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/5.jpeg' },
  { id: 76, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/6.jpeg' },
  { id: 77, name: 'A-B Embroidery Collar', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/7.jpeg' },
  { id: 78, name: 'Motif Collar Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/8.jpeg' },
  { id: 79, name: 'A-B Dori Black Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/9.jpeg' },
  { id: 80, name: 'O-G Brown Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/10.jpeg' },
  { id: 81, name: 'A-B Ari Green Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/11.jpeg' },
  { id: 82, name: 'A-B Dori Green Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/12.jpeg' },
  { id: 83, name: 'Mor Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/13.jpeg' },
  { id: 84, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/14.png' },
  { id: 85, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/15.jpeg' },
  { id: 86, name: 'R-P Waiscoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/16.jpeg' },
  { id: 87, name: 'A-B Velvet Black Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/17.jpeg' },
  { id: 88, name: '5D-2 Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/18.jpeg' },
  { id: 89, name: 'A-B Green Dori Panel', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/19.jpeg' },
  { id: 90, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/20.jpeg' },
  { id: 91, name: 'Front Line Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/21.jpeg' },
  { id: 92, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/22.png' },
  { id: 93, name: 'Rust Motif Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/23.jpeg' },
  { id: 94, name: 'FSQ Ice Blue Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/24.png' },
  { id: 95, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/25.jpeg' },
  { id: 96, name: 'Chicken Kari Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/26.png' },
  { id: 97, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/27.jpeg' },
  { id: 98, name: 'KM Mor Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/28.png' },
  { id: 99, name: 'A-B Dori Pink Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/29.jpeg' },
  { id: 100, name: 'Green Tropical Waisctoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/30.jpeg' },
  { id: 101, name: 'Atlas Waistcoat', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/31.jpeg' },
  { id: 102, name: 'Gumaan Krundy Chicken Kari', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(1).jpeg' },
  { id: 103, name: 'Gumaan Sheesh Mehal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(1).jpeg' },
  { id: 104, name: 'Gumaan KM Side Motif', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(1).jpeg' },
  { id: 105, name: 'Embroidered Kundan Zari Sherwani', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(1).jpeg' },
  { id: 269, name: 'Afsanah Buhay Barian', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(2).jpeg' },
  { id: 222, name: 'Gumaan K-Bissino', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(1).jpeg' },
  { id: 211, name: 'Gumaan Velvet Jaal', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(1).jpeg' },
  { id: 130, name: '‘Hatf’ Shoes', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%201%20(1).jpeg' },
  { id: 131, name: '‘Shaheen’ Shoes', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%202%20(1).jpeg' },
  { id: 132, name: '‘Nasr’ Shoes', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%203%20(1).jpeg' },
  { id: 133, name: '‘Fateh’ Shoes', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%204%20(1).jpeg' },
  { id: 134, name: '‘Babar’ Khussa', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%205%20(1).jpeg' },
  { id: 135, name: '‘Raad’ Khussa (Saleem-Shahi)', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%206%20(2).jpeg' },
  { id: 136, name: '‘Harbay’ Khussa (Saleem-Shahi)', image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RANJHA-SHOES/shoe%207%20(2).jpeg' },


  
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isNewInDropdownOpen, setIsNewInDropdownOpen] = useState(false);
  const [isGumanDropdownOpen, setIsGumanDropdownOpen] = useState(false);
  const [isNafastDropdownOpen, setIsNafastDropdownOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef(null);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
  
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);
  
  const toggleNewInDropdown = () =>
    setIsNewInDropdownOpen(!isNewInDropdownOpen);
  const toggleGumanDropdown = () =>
    setIsGumanDropdownOpen(!isGumanDropdownOpen);
  const toggleNafastDropdown = () =>
    setIsNafastDropdownOpen(!isNafastDropdownOpen);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top Notice Bar */}
      <div className="bg-[#303030] text-[#45e6a5] text-sm px-2 py-1 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4 text-center">
          {/* Text */}
         <p className="font-medium text-white">
  Call / WhatsApp: <a href="tel:+923444447759" className="font-bold" style={{ color: '#66D7A1' }}>+923444447759</a> | Shipping Worldwide
</p>


          {/* Icons */}
          <div className="flex space-x-3 mt-1 md:mt-0 text-[#45e6a5]">
            <a href="https://www.facebook.com/dulhahouseofficial/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="https://www.instagram.com/dulhahouseofficial?igsh=MWNsZXNzY3c4NzdsdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="https://www.youtube.com/@dulhahouseofficial" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-white" />
            </a>
            <a href="https://www.pinterest.com/dulhahouseofficiall/?invite_code=2823749e7a4b4a16a6b0dd10e1fad2b2&sender=842806655174521841" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="hover:text-white" />
            </a>
            <a href="https://www.google.com/maps/place/DULHA+HOUSE/@31.5607042,74.3208983,17z/data=!3m1!4b1!4m6!3m5!1s0x39191b41d94e9595:0x7efce1fad5291f97!8m2!3d31.5607042!4d74.3208983!16s%2Fg%2F11hyzb5qt3?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="hover:text-white" />
            </a>
            <a href="https://www.tiktok.com/@dulhahouseofficial?_t=ZS-8urqpV724Nm&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container mx-auto flex items-center justify-between  px-4 md:px-6 md:pt-3 md:pb-3 ">
      {/* Hamburger Icon */}
        <div className="text-xl md:hidden pt-4">
          <FaBars
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>

        {/* Logo */}
        <div className="flex-1 text-center pt-2  md:pt-0 -mb-3">
        <a href="/" className="inline-block">
  <img
    src="https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/cropped-dulah%20logo%20%20(1).PNG"
    alt="Dulha House Logo"
    className="h-12 md:h-14 mx-auto"
  />
</a>

</div>


{/* Search Icon (toggles between search and cross) */}
<div className="relative text-xl pt-4">
  {showSearch ? (
    <FaTimes
      className="text-2xl cursor-pointer hover:text-[#000000]"
      onClick={() => {
        setShowSearch(false);
        setSearchQuery("");
      }}
    />
  ) : (
    <FaSearch
      className="text-2xl cursor-pointer hover:text-[#000000]"
      onClick={() => setShowSearch(true)}
    />
  )}
</div>
      </div>

      {/* Line Below Logo */}
      <div className="hidden md:block h-[] bg-[#707173]"></div>

    {/* Search Bar */}
{showSearch && (
  <div
    ref={searchRef}
    className="w-full bg-white px-4 py-3 shadow-md border-t border-gray-200 z-50"
  >
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#d4d4d4] transition"
      />
      {/* Search Icon inside input */}
      <FaSearch className="absolute right-3 top-2.5 text-gray-400" />

      {/* Filtered Product Dropdown */}
      {searchQuery && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-y-auto z-50">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded mr-3"
                />
                <p className="font-medium">{product.name}</p>
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  </div>
)}

      {/* Line Below Logo */}
      <div className="hidden md:block h-[1px] bg-[#707173]"></div>

      <div className="w-full flex justify-center pb-2 pt-2">
  {/* Desktop Menu Links */}
  <div className="hidden md:flex space-x-10 text-base font-josefin-sans text-[#313131]">
    
    {/* Home */}
    <div className="relative group">
      <Link to="/" className="text-black hover:text-[#333] transition-all duration-300 relative">
        Home
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>

    {/* New In */}
    <div className="relative group">
      <Link to="/new-in" className="text-black hover:text-[#333] transition-all duration-300 relative">
        New In
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
      <div className="absolute top-full left-0 bg-[#f8f8f8] text-black p-3 mt-1 w-48 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out transform rounded-md z-50">
        <Link to="/new-in/afsanas" className="block text-sm text-[#313131] hover:text-[#333] py-2 px-3 border-b border-[#e0e0e0] hover:underline">
          Afsanah
        </Link>
      </div>
    </div>

    {/* Gumaan */}
    <div className="relative group">
      <Link to="/guman" className="text-black hover:text-[#333] transition-all duration-300 relative">
        Gumaan
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
      <div className="absolute top-full left-0 bg-[#f8f8f8] text-black p-3 mt-1 w-48 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out transform rounded-md z-50">
        <Link to="/guman/volume-1" className="block text-sm text-[#313131] hover:text-[#333] py-2 px-3 border-b border-[#e0e0e0] hover:underline">
          Volume 1
        </Link>
        <Link to="/guman/volume-2" className="block text-sm text-black hover:text-[#333] py-2 px-3 hover:underline">
          Volume 2
        </Link>
      </div>
    </div>

    {/* Nafasat */}
    <div className="relative group">
      <Link to="/nafast" className="text-black hover:text-[#333] transition-all duration-300 relative">
        Nafasat
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
      <div className="absolute top-full left-0 bg-[#f8f8f8] text-black p-3 mt-1 w-48 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out transform rounded-md z-50">
        <Link to="/nafast/volume-1" className="block text-sm text-[#313131] hover:text-[#333] py-2 px-3 border-b border-[#e0e0e0] hover:underline">
          Volume 1
        </Link>
        <Link to="/nafast/volume-2" className="block text-sm text-[#313131] hover:text-[#333] py-2 px-3 hover:underline">
          Volume 2
        </Link>
      </div>
    </div>

     {/* Sherwani */}
     <div className="relative group">
      <Link to="/sherwani" className="text-black hover:text-[#333] hover:underline transition-all duration-300 relative">
        Sherwani
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>

    {/* Prince Coat */}
    <div className="relative group">
      <Link to="/prince-coat" className="text-black hover:text-[#333] hover:underline transition-all duration-300 relative">
        Prince Coat
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>

    {/* Waist Coat */}
    <div className="relative group">
      <Link to="/waist-coat" className="text-black hover:text-[#333] hover:underline transition-all duration-300 relative">
        Waist Coat
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>

    {/* Accessories */}
    <div className="relative group">
      <Link to="/accessories" className="text-black hover:text-[#333] hover:underline transition-all duration-300 relative">
        Accessories
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>

    {/* Bespoke Tailoring */}
    <div className="relative group">
      <Link to="/bespoke-tailoring" className="text-black hover:text-[#333] hover:underline transition-all duration-300 relative">
        Bespoke
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>

    {/* Contact Us */}
    <div className="relative group">
      <Link to="/contact" className="text-black hover:text-[#333] hover:underline transition-all duration-300 relative">
        Contact Us
        <span className="absolute left-0 bottom-0 block w-0 h-[1px] bg-black transition-all duration-400 group-hover:w-full"></span>
      </Link>
    </div>
  </div>
</div>



      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">MENU</span>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        <ul className="space-y-6 px-6 py-4">
  <li>
    <Link
      to="/"
      className="text-sm text-[#313131] block py-2 w-full border-b-2 border-lightgray hover:text-[#333] hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Home
    </Link>
  </li>

  <li>
    <button
      onClick={toggleNewInDropdown}
      className="text-sm text-[#313131] w-full text-left flex justify-between items-center py-2 hover:text-[#333] border-b-2 border-lightgray hover:underline font-josefin-sans"
    >
      New In
      <FaChevronDown
        className={`transform transition-transform duration-200 ${isNewInDropdownOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>
    {isNewInDropdownOpen && (
      <ul className="space-y-2 pl-6 bg-[#f8f8f8] rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        <li>
          <Link
            to="/new-in/afsanas"
            className="text-sm text-[#313131] hover:text-[#333] block py-2 px-3 rounded-md font-josefin-sans transition-all duration-200 ease-in-out border-b-2 border-[#e0e0e0]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Afsanah
          </Link>
        </li>
      </ul>
    )}
  </li>

  <li>
    <button
      onClick={toggleGumanDropdown}
      className="text-sm text-[#313131] w-full text-left flex justify-between items-center py-2 hover:text-[#333] border-b-2 border-lightgray hover:underline font-josefin-sans"
    >
      Gumaan
      <FaChevronDown
        className={`transform transition-transform duration-200 ${isGumanDropdownOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>
    {isGumanDropdownOpen && (
      <ul className="space-y-2 pl-6 bg-[#f8f8f8] rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        <li>
          <Link
            to="/guman/volume-1"
            className="text-sm text-[#313131] hover:text-[#333] block py-2 px-3 rounded-md font-josefin-sans transition-all duration-200 ease-in-out border-b-2 border-[#e0e0e0]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Volume 1
          </Link>
        </li>
        <li>
          <Link
            to="/guman/volume-2"
            className="text-sm text-[#000000] hover:text-[#333] block py-2 px-3 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Volume 2
          </Link>
        </li>
      </ul>
    )}
  </li>

  <li>
    <button
      onClick={toggleNafastDropdown}
      className="text-sm text-[#313131] w-full text-left flex justify-between items-center py-2 hover:text-[#333] border-b-2 border-lightgray hover:underline font-josefin-sans"
    >
      Nafasat
      <FaChevronDown
        className={`transform transition-transform duration-200 ${isNafastDropdownOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>
    {isNafastDropdownOpen && (
      <ul className="space-y-2 pl-6 bg-[#f8f8f8] rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        <li>
          <Link
            to="/nafast/volume-1"
            className="text-sm text-[#313131] hover:text-[#333] block py-2 px-3 rounded-md font-josefin-sans transition-all duration-200 ease-in-out border-b-2 border-[#e0e0e0]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Volume 1
          </Link>
        </li>
        <li>
          <Link
            to="/nafast/volume-2"
            className="text-sm text-[#313131] hover:text-[#333] block py-2 px-3 rounded-md font-josefin-sans transition-all duration-200 ease-in-out border-b-2 border-[#e0e0e0]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Volume 2
          </Link>
        </li>
      </ul>
    )}
  </li>
  <li>
    <Link
      to="/sherwani"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Sherwani
    </Link>
  </li>
  <li>
    <Link
      to="/prince-coat"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Prince Coat
    </Link>
  </li>

  <li>
    <Link
      to="/waist-coat"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Waist Coat
    </Link>
  </li>

   <li>
    <Link
      to="/accessories"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Accessories
    </Link>
  </li>

  <li>
    <Link
      to="/bespoke-tailoring"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Bespoke
    </Link>
  </li>
  <li>
    <Link
      to="/client-dairy"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Client Diary
    </Link>
  </li>

  <li>
    <Link
      to="/reviews-page"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Testimonial
    </Link>
  </li>

  <li>
    <Link
      to="/Contact"
      className="text-sm text-[#313131] hover:text-[#333] block py-2 w-full border-b-2 border-lightgray hover:underline font-josefin-sans transition-all duration-300"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Contact Us
    </Link>
  </li>
</ul>

      </div>

    
    </nav>
  );
};

export default Navbar;
