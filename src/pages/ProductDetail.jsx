import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from '@heroicons/react/24/outline'; // Importing the scale icon
import { FiShare2 } from "react-icons/fi"; // Feather share icon
import toast, { Toaster } from 'react-hot-toast';  // Importing react-hot-toast


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Afsanah Black Border ",
      category: "afsanah",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Aurgenza Pure<br />
          <span className="font-bold">Embellishment:</span>  Self Embroidered Fabric + Hand Embellished Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span> Hidden<br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Shawl:</span> Embroidered Border on Raw Silk <br />

          <span className="font-bold">Inner Suit:</span> Black Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%201%20(2).jpeg"
      ],
    },  
    {
      id: 2,
      name: "Afsanah Coffee Motif",
      category: "afsanah",

      price: 28999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Embellishment:</span> Hand Embellished Front - Sleeves - Collar <br />
          <span className="font-bold">Buttons:</span>  Hidden Placket<br />
          <span className="font-bold">Colour:</span>Coffee 
          <br />
          <span className="font-bold">Inner Suit:</span> Staple Silk / Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202%20(2).jpeg",
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202%20(3).jpeg",
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%202.jpg"
      ],
    },
    {
      id: 3,
      name: "Afsanah Black Gold Motif",
      category: "afsanah",

      price: 14999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>  Self Embroidery on Silk  <br />
          <span className="font-bold"> Embellishment:</span>  Hand Embellished Front - Sleeves - Collar  <br />
          <span className="font-bold">Buttons:</span> Hidden <br />
          <span className="font-bold">Colour:</span>Black <br />
          <span className="font-bold">Inner Suit:</span>Black Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%203%20(4).jpeg",
      ],
    },
    {
      id: 4,
      name: "Afsanah Bissino Mor ",
      category: "afsanah",

      price: 24999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidery on Silk <br />
          <span className="font-bold">Embellishment:</span>  Hand Embellished Sleeves - Buttons - Collar <br />
          <span className="font-bold">Buttons:</span> Embroidered  <br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Inner Suit:</span>Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/por%204%20(4).jpeg",
      ],
    },
    {
      id: 5,
      name: "Afsanah Velvet Jaal",
      category: "afsanah",

      price: 59999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Velvet Embroidered  <br />
          <span className="font-bold">Embellishment:</span>  Fully Embellished Front - Sleeves - Collar <br />
          <span className="font-bold">Buttons:</span>  Hidden <br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Inner Suit:</span> Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro5%20(4).jpeg"
      ],
    },
    {
      id: 6,
      name: "Afsanah Moti Jaal ",
      category: "afsanah",

      price: 39999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Krundy <br />
          <span className="font-bold"> Embellishment:</span>Fully Embellished Front - Sleeves - Collar <br />
          <span className="font-bold">Buttons:</span>  Hidden <br />
          <span className="font-bold">Colour:</span> Offwhite  <br />
          <span className="font-bold">Inner Suit:</span> Offwhite Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(7).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(6).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(5).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%206%20(8).jpeg",
      ],
    },
    {
      id: 7,
      name: "Afsanah Machli Tanka",
      category: "afsanah",

      price: 44999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Embroidered Kundan Zari <br />
          <span className="font-bold"> Embellishment:</span>: Heavily Hand Embellished Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span> Hidden Placket<br />
          <span className="font-bold">Colour:</span> Skin Gold <br />
          <span className="font-bold">Inner Suit:</span> Offwhite Raw Silk 
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%207%20(4).jpeg",
      ],
    },
    {
      id: 8,
      name: "Afsanah Chicku Jaal",
      category: "afsanah",

      price: 54999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Silk <br />
          <span className="font-bold">Embellishment:</span>  Hand Embellished Front - Sleeves - Collar <br />
          <span className="font-bold">Buttons:</span> Hidden Placket <br />
          <span className="font-bold">Colour:</span> Chicku  <br />
          <span className="font-bold">Inner Suit:</span>Chicku Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%208%20(4).jpeg"
      ],
    },
    {
      id: 9,
      name: "Afsanah Rose Gold Jaal",
      category: "afsanah",

      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Pure Tissu <br />
          <span className="font-bold">Embellishment:</span> Fully Hand Embellished Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span>  Hidden Placket <br />
          <span className="font-bold">Colour:</span> Rose Gold  <br />
          <span className="font-bold">Inner Suit:</span> Rose Gold Staple Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%209%20(4).jpeg"
       
      ],
    },
    {
      id: 10,
      name: "Afsanah Open Gown",
      category: "afsanah",

      price: 69999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Silk <br />
          <span className="font-bold">Embellishment:</span>  Hand Embellished Front - Sleeves - Collar <br />
          <span className="font-bold">Buttons:</span>  Open Gown <br />
          <span className="font-bold">Colour:</span> Skin Gold  <br />
          <span className="font-bold">Inner Suit:</span>Korean Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(5).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(8).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(6).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2010%20(7).jpeg",
     
      ],
    },

    {
      id: 11,
      name: "Afsanah KM Heavy Jaal",
      category: "afsanah",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Jamawar <br />
          <span className="font-bold">Embellishment:</span> Fully Hand Embellished Front - Sleeves - Colla <br />
          <span className="font-bold">Buttons:</span>  Hidden Placket <br />
          <span className="font-bold">Colour:</span> Skin Gold <br />
          <span className="font-bold">Inner Suit:</span> Staple Silk / Raw Silk / Korean Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/product%2011%20(1).jpeg"
       
      ],
    },
    {
      id: 269,
      name: "Afsanah Buhay Barian",
      category: "afsanah",

      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Silk <br />
          <span className="font-bold"> Embellishment:</span>Fully Hand Embellished Front - Sleeves - Collar <br />
          <span className="font-bold">Buttons:</span> Hidden Placket
          <br />
          <span className="font-bold">Colour:</span> Skin Gold  <br />
          <span className="font-bold">Inner Suit:</span>  Korean Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Afsanah/pro%2012%20(3).jpeg"
       
      ],
    },


    
  ////////////////////////////////////////////////GUMAAN VOL 1 START//////////////

    {
      id: 12,
      name: "COV Heavy Coat",
      category: "gummanvol1",

      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>  Atlas <br />
          <span className="font-bold">Hand Embellishment:</span>Fully Hand Embellished Sleeves - Front
          <br />
          <span className="font-bold">Buttons:</span> Hidden Placket
          <br />
          <span className="font-bold">Colour:</span>  Deep Bottle Green
          <br />
          <span className="font-bold">Inner Suit:</span> Copper Indian Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%201%20(1).jpeg"
       
      ],
    },
    {
      id: 13,
      name: "Purple Dori Jaal",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Afghan Silk <br />
          <span className="font-bold">Hand Embellishment:</span> Machine + Hand Embellished Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span> Hidden Placket <br />
          <span className="font-bold">Colour:</span>  Purple
          <br />
          <span className="font-bold">Inner Suit:</span> Copper Indian Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%202%20(2).jpeg"
       
      ],
      category: "gummanvol1",

    },
    {
      id: 14,
      name: "KM Up Down Motif",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Jacquard <br />
          <span className="font-bold">Hand Embellishment:</span> Collar - Upper Shoulder - Left Bottom <br />
          <span className="font-bold">Buttons:</span> Metal <br />
          <span className="font-bold">Colour:</span> Offwhite <br />
          <span className="font-bold">Inner Suit:</span> Staple Silk / Indian Raw Silk / Pakistani Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%203%20(1).jpeg"
       
      ],
      category: "gummanvol1",

    },



    {
      id: 15,
      name: "KM Rust Shoulder Waistcoat",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Atlas <br />
          <span className="font-bold">Hand Embellishment:</span>Below Pocket - Collar - Shoulders
          <br />
          <span className="font-bold">Buttons:</span> Embroidered  <br />
          <span className="font-bold">Colour:</span> Rust <br />
          <span className="font-bold">Inner Suit:</span>Copper Indian Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%204%20(4).jpeg",
        
      ],
      category: "gummanvol1",

    },

    {
      id: 16,
      name: "Copper Tissue Border Spray",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embossed Tissue <br />
          <span className="font-bold"> Embellishment:</span> Full Front Spray - Embroidered Borders on Front - Collar <br />
          <span className="font-bold">Buttons:</span>Hidden <br />
          <span className="font-bold">Colour:</span>Copper <br />
          <span className="font-bold">Inner Suit:</span> Black Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%205%20(1).jpeg",
      ],
      category: "gummanvol1",

    },

    {
      id: 17,
      name: "3-D Sea Green Waistcoat",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Aurgenza Pure <br />
          <span className="font-bold">Embellishment:</span> Self Embroidered Fabric<br />
          <span className="font-bold">Buttons:</span> Hidden <br />
          <span className="font-bold">Colour:</span> Sea Green Base + Silver Embroidery Upper <br />
          <span className="font-bold">Inner Suit:</span> White Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol1/pro%206%20(4).jpeg",
      ],
      category: "gummanvol1",

    },
  ////////////////////////////////////////////////GUMAAN VOL 1 end//////////////

    // gumman vol2 sherwani 
    {
      id: 18,
      name: "Gumaan Cubic Bissino",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Krundy <br />
          <span className="font-bold">Embellishment:</span> Hand Resham Embroidered Collar<br />
          <span className="font-bold">Buttons:</span>Metal <br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Inner Suit:</span>  Black Raw Silk 
        </p>
      ),
      category: "gummanvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%201%20(4).jpeg",
      ],
    },
    {
      id: 19,
      name: "Gumaan Dori Bazu Bissino",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Jamawar <br />
          <span className="font-bold">Embellishment:</span>Hand Embroidered Collar - Pocket Motif - Sleeves c<br />
          <span className="font-bold">Buttons:</span> Embroidered  <br />
          <span className="font-bold">Colour:</span>  Camel  <br />
          <span className="font-bold">Inner Suit:</span> Raw Silk Dyed
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%202%20(4).jpeg",
      ],
      category: "gummanvol2",

    },
    {
      id: 20,
      name: "Gumaan Black Copper Motif",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas<br />
          <span className="font-bold">Embellishment:</span> Embroidered Motifs on Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span> Hidden Placket
          <br />
          <span className="font-bold">Colour:</span> Black Copper <br />
          <span className="font-bold">Inner Suit:</span>  Black Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%203%20(4).jpeg",
      ],
      category: "gummanvol2",

    },
    {
      id: 21,
      name: "Gumaan Black Heavy Jaal",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Silk <br />
          <span className="font-bold">Embellishment:</span> Hand Embroidered Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span>Hidden Placket <br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Inner Suit:</span> Black Raw Silk 
        </p>
      ),
      images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%204%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%204%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%204%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2024%204th.jpeg",

      ],
      category: "gummanvol2",

    },
    {
      id: 22,
      name: "Gumaan Panel Jaal",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Kundan Zari<br />
          <span className="font-bold">Embellishment:</span> Hand Embroidered Collar - Front - Sleeves<br />
          <span className="font-bold">Buttons:</span> Hidden <br />
          <span className="font-bold">Colour:</span>  Golden <br />
          <span className="font-bold">Inner Suit:</span> Offwhite Raw Silk 
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%205%20(4).jpeg"
      ],
      category: "gummanvol2",

    },
    {
      id: 23,
      name: "Gumaan Open Gown",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Silk <br />
          <span className="font-bold">Embellishment:</span> Self Embroidered Fabric<br />
          <span className="font-bold">Buttons:</span> Open Gown <br />
          <span className="font-bold">Colour:</span> Skin  <br />
          <span className="font-bold">Kurta:</span> Self Embroidered Silk Kurta
          <span className="font-bold">Trouser:</span> SDye Raw Silk

        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%206%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%206%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro23new%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro23new%20(2).jpeg",
      ],
      category: "gummanvol2",

    },
    {
      id: 24,
      name: "Gumaan K-M Mountains",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>Atlas Self Printed <br />
          <span className="font-bold">Embellishment:</span> Hand Embroidery on Sleeves - Collar - Buttons<br />
          <span className="font-bold">Buttons:</span> Embroidered Motifs <br />
          <span className="font-bold">Colour:</span> Silverish Tilla, White Base <br />
          <span className="font-bold">Inner Suit:</span> White Raw Silk 
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%207%20(4).jpeg"
      
      ],
      category: "gummanvol2",

    },
    
 
    {
      id: 222,
      name: "Gumaan K-Bissino",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Embellishment:</span> Hand Embroidered Collar - Sleeves - Buttons<br />
          <span className="font-bold">Buttons:</span> Embroidered  <br />
          <span className="font-bold">Colour:</span> Fone <br />
          <span className="font-bold">Inner Suit:</span> Cream Raw Silk
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%208%20(4).jpeg",
      ],
      category: "gummanvol2",

    },
    {
      id: 211,
      name: "Gumaan Velvet Jaal",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Velvet <br />
          <span className="font-bold">Embellishment:</span>Heavily Hand Embroidered Front - Sleeves - Back - Collar<br />
          <span className="font-bold">Buttons:</span> Hidden <br />
          <span className="font-bold">Colour:</span> Black
          <br />
          <span className="font-bold">Inner Suit:</span> Black Raw Silk 
        </p>
      ),
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%209%20(4).jpeg"
       
      ],
      category: "gummanvol2",

    },
    {
      id: 102,
      name: "Gumaan Krundy Chicken Kari",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>Krundy<br />
          <span className="font-bold">Embellishment:</span> Self Embroidered Fabric<br />
          <span className="font-bold">Buttons:</span> Hidden Placket <br />
          <span className="font-bold">Colour:</span>  Offwhite<br />
          <span className="font-bold">Inner Suit:</span> Offwhite Raw Silk

        </p>
      ),
      images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(1).jpeg",
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(2).jpeg",
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(3).jpeg",
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2010%20(4).jpeg",
  
      ],
      category: "gummanvol2",

    },
    {
      id: 103,
      name: "Gumaan Sheesh Mehal",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Velvet Micro 9000 <br />
          <span className="font-bold">Embellishment:</span> Hand Embroidered Front - Sleeves - Collar<br />
          <span className="font-bold">Buttons:</span> Hidden Placket <br />
          <span className="font-bold">Colour:</span>Dark Green<br />
          <span className="font-bold">Inner Suit:</span> Copper Indian Raw Silk
        </p>
      ),
      images: [ 
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2011%20(4).jpeg",
      ],
      category: "gummanvol2",

    },
    {
      id: 104,
      name: "Gumaan KM Side Motif ",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Atlas Self Printed <br />
          <span className="font-bold">Embellishment:</span> Hand Embroidered Shoulder Motif<br />
          <span className="font-bold">Buttons:</span> Metal <br />
          <span className="font-bold">Colour:</span> Turquoise  <br />
          <span className="font-bold">Inner Suit:</span> Cream Raw Silk
        </p>
      ),
      images: [
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(1).jpeg",
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(2).jpeg",
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(3).jpeg",
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/gumanvol2/pro%2012%20(4).jpeg"
  
      ],
      category: "gummanvol2",

    },
  
////////////////////GUMAAN VOL 2 END////////////////////////////////////


    //Nafasat Vol 2  START////////////////////////////////////////////////
    {
      id: 26,
      name: "Skin Gold Short Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Computer Embroidered Silk <br />
          <span className="font-bold">Hand Embellishment:</span> Collar <br />
          <span className="font-bold">Buttons:</span> Metal <br />
          <span className="font-bold">Colour:</span> Skin Gold <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%201%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/nasfat%20vol%202%20pro%201%204th.jpeg"
      ],
      
    },
    {
      id: 27,
      name: "Black Velvet Heavy Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Velvet  <br />
          <span className="font-bold">Hand Embellishment:</span> Fully Front - Sleeves - Collar <br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%202%20(3).jpeg"
       
      ],
    },
    {
      id: 28,
      name: "Black & Water Gold Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Computerised Embroidered Silk <br />
          <span className="font-bold">Hand Embellishment:</span>Embellishment: Front - Sleeves - Collar<br />
          <span className="font-bold">Colour:</span> Black & Water Gold<br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%203%20(4).jpeg",
      ],
    },
    {
      id: 29,
      name: "Pista Motif Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Computer Embroidered Silk <br />
          <span className="font-bold">Hand Embellishment:</span> Front - Sleeves - Collar <br />
          <span className="font-bold">Colour:</span> Light Pista <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%204%20(4).jpeg"
       
      ],
    },
    {
      id: 30,
      name: "Black Atlas Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Atlas Self Printed <br />
          <span className="font-bold">Hand Embellishment:</span> Collar - Sleeves - Buttons <br />
          <span className="font-bold">Colour:</span> Black <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%205%20(2).jpeg",
      ],
    },
    {
      id: 31,
      name: "Heavy Embroidered Skin Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Kundan Zari<br />
          <span className="font-bold">Hand Embellishment:</span> Fully Front - Sleeves - Collar <br />
          <span className="font-bold">Colour:</span> Skin  <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%206%20(4).jpeg"
      
      ],
    },
    {
      id: 32,
      name: "Golden Self Printed",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Hand Embellishment:</span> Collar - Sleeves - Butoom <br />
          <span className="font-bold">Colour:</span> Golden <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%207%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/34%20pro%206.jpeg",
      ],
    },
    {
      id: 33,
      name: "Self Printed Jamawar",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Jamawar <br />
          <span className="font-bold">Hand Embellishment:</span> Front - Sleeves - Collar <br />
          <span className="font-bold">Colour:</span> Fone<br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%208%20(3).jpeg",
      ],
    },
   
    {
      id: 105,
      name: "Embroidered Kundan Zari Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Kundan Zari <br />
          <span className="font-bold">Hand Embellishment:</span> Collar<br />
          <span className="font-bold">Buttons:</span> Metal <br />
          <span className="font-bold">Colour:</span> Skin Gold<br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: [
  "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2011%20(1).jpeg",
"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/nafast%20105%20(1).jpeg",
"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/nafast%20105%20(3).jpeg",
"https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/nafast%20105%20(2).jpeg",

  
      ]
    },
    {
      id: 69,
      name: "Machine Embroidered Prince Coat",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Hand + Machine Embellishment:</span> Front - Sleeves - Collar<br />
          <span className="font-bold">Colour:</span> Rust <br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%209%20(3).jpeg"
      ], // Add image URL here
    },
    {
      id: 70,
      name: "Heavy Embroidered Prince Coat",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Hand Embellishment:</span> Front - Sleeves<br />
          <span className="font-bold">Colour:</span> Gold<br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol2",
      images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatVol2/pro%2010%20(2).jpeg"
      ], // Add image URL here
    },

    //////////////////////////////////////////Here Nafasat VOL 2 END////////////////////////////////////////


    //////////////////////////////////////////NAFAASAT VOL 1 START////////////////////////////////////////

    {
      id: 34,
      name: "Mughal Motif Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Pure Aurgenza <br />
          <span className="font-bold">Hand Embellishment:</span>Full front, sleeves<br />
          <span className="font-bold">Buttons:</span> Hidden Placket <br />
          <span className="font-bold">Colour:</span> Black<br />
          <span className="font-bold">Inner Suit:</span>Pakistani Raw Silk
        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%201%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%201%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%201%20(3).jpeg",
      ],
    },
    
    {
      id: 35,
      name: "Golden Ari Jacquard Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Jacquard / Atlas <br />
          <span className="font-bold">Hand Embellishment:</span> Sleeves - Buttons - Collar <br />
          <span className="font-bold">Buttons:</span> Embroidered <br />
          <span className="font-bold">Colour:</span> Black<br />
          <span className="font-bold">Inner Suit:</span> Pakistani Raw Silk / Staple Silk / Indian Raw Silk
        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%202%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%202%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%202%20(1).jpeg",
      ],
    },
    {
      id: 36,
      name: "Border Jaal Offwhite",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Atlas / Jacquard / Jamawar <br />
        <span className="font-bold">Hand Embellishment:</span>  Machine + Hand <br />
        <span className="font-bold">Buttons:</span>Hidden Placket <br />
        <span className="font-bold">Colour:</span> Off white<br />
        <span className="font-bold">Inner Suit:</span> Off-White Raw Silk
      </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%203%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%203%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%203%20(3).jpeg",
      ],
    },
    {
      id: 37,
      name: "Atlas SP Design",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Atlas Self Printed <br />
          <span className="font-bold">Hand Embellishment:</span> Collar - Sleeves - Buttons <br />
          <span className="font-bold">Buttons:</span>Round and Motif shaped Embroidered <br />
          <span className="font-bold">Colour:</span> Fone Gold<br />
          <span className="font-bold">Inner Suit:</span> Cream Raw Silk / Staple Silk / Korean Silk
        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/por%204%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/por%204%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/por%204%20(2).jpeg",
      ],
    },
    
    {
      id: 38,
      name: "4-G Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Kundan Zari Embroidered <br />
          <span className="font-bold">Hand Embellishment:</span>Fully front - sleeves - Collar <br />
          <span className="font-bold">Buttons:</span> Hidden Placket          <br />
          <span className="font-bold">Colour:</span>  Gold 
          <br />
          <span className="font-bold">Inner Suit:</span> Staple Silk / Korean Silk
        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%205%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%205%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%205%20(3).jpeg",
      ],
    },
    {
      id: 39,
      name: "4-G Collar Krundy",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>  Krundy Embroidered <br />
          <span className="font-bold">Hand Embellishment:</span>Collar <br />
          <span className="font-bold">Buttons:</span>  Metal <br />
          <span className="font-bold">Colour:</span> Offwhite with Water Gold Tilla<br />
          <span className="font-bold">Inner Suit:</span>  Offwhite Raw Silk (Pakistani)

        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%206%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%206%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%206%20(2).jpeg",
,
      ],
    },
    {
      id: 40,
      name: "R-P Sherwani",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>  Silk Embroidered 
          <br />
          <span className="font-bold">Hand Embellishment:</span> Fully Front - Sleeves - Collar
          <br />
          <span className="font-bold">Buttons:</span>Hidden Placket <br />
          <span className="font-bold">Colour:</span>  Fone / Rose Gold<br />
          <span className="font-bold">Inner Suit:</span>Staple Silk

        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%207%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%207%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%207%20(3).jpeg",
      ],
    },
    {
      id: 41,
      name: "Half Bazu Payzli",
      price: 19999,
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Tissue Embroidered <br />
          <span className="font-bold">Hand Embellishment:</span>  Sleeves - Buttons - Collar
          <br />
          <span className="font-bold">Buttons:</span> Embroidered <br />
          <span className="font-bold">Colour:</span> Gold
          <br />
          <span className="font-bold">Inner Suit:</span> Staple Silk / Cream Raw Silk
        </p>
      ),
      category: "nafasatvol1",
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%208%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/nafasatvol1/pro%208%20(2).jpeg",
      ],
    },

     

//////////////////////////////////////////////NAFASAT VOL 1 END ////////////////////////////////////////////

   //All prince coat
   {
    id: 43,
    name: "Side Motif Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
        <span className="font-bold">Embellishment:</span>  Hand Embroidery on Shoulder - Collar
        <br />
        <span className="font-bold">Buttons:</span>Metal <br />
        <span className="font-bold">Colour:</span> Skin Fone
        <br />
      </p>
    ),
    category: "prince coat",
    images: [
     "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/1.jpeg",

    ],
  },  
  {
    id: 44,
    name: "Massouri Two Tone Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Massouri<br />
        <span className="font-bold"> Embellishment:</span>   Lightly Hand Embellished Front - Sleeves - Collar
        <br />
        <span className="font-bold">Buttons:</span> Hidden Placket<br />
        <span className="font-bold">Colour:</span> Copper - Skin
        <br />
      </p>
    ),
    category: "prince coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/2.jpeg",], // Add image URL here
  },
  {
    id: 45,
    name: "Suiting Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Suiting <br />
        <span className="font-bold">Embellishment:</span> Hand Embroidered Motif below pocket
        <br />
        <span className="font-bold">Buttons:</span>  Metal <br />
        <span className="font-bold">Colour:</span> Black
        <br />
      </p>
    ),
    category: "prince coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/3.jpeg"], // Add image URL here
  },
  {
    id: 46,
    name: "FS Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Raw Silk <br />
        <span className="font-bold"> Embellishment:</span>  Resham Embroidered  on Front - Sleeves - Collar
        <br />
        <span className="font-bold">Buttons:</span>Hidden Placket <br />
        <span className="font-bold">Colour:</span>  Orange 
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/4.jpeg"], // Add image URL here
  },
  {
    id: 47,
    name: "Rust Touch Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Atlas<br />
        <span className="font-bold"> Embellishment:</span>   Hand Embellished Front - Sleeves - Buttons
        <br />
        <span className="font-bold">Buttons:</span> Hidden Placket <br />
        <span className="font-bold">Colour:</span> Rustic Orange
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/5.jpeg"], // Add image URL here
  },
  {
    id: 48,
    name: "Side Motif Krundy Two Tone ",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embossed Pure Krundy <br />
        <span className="font-bold">Embellishment:</span> Hand Resham Embellished Shoulders
        <br />
        <span className="font-bold">Buttons:</span> Metal <br />
        <span className="font-bold">Colour:</span> Sage Green 
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/6.jpeg"], // Add image URL here
  },
  {
    id: 49,
    name: "COV-2 Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Jamawar Self Printed <br />
        <span className="font-bold"> Embellishment:</span> Hand Embroidered Front - Sleeves
        <br />
        <span className="font-bold">Buttons:</span> Hidden Placket<br />
        <span className="font-bold">Colour:</span>Green
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/7.jpeg"], // Add image URL here
  },
  {
    id: 50,
    name: "Self Printed Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Atlas<br />
        <br />
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Green

        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/8.jpeg"], // Add image URL here
  },
  {
    id: 51,
    name: "Andrakha Style Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
        <br />
        <span className="font-bold">Buttons:</span> Metal <br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/9.jpeg"], // Add image URL here
  },
  {
    id: 52,
    name: "Self Embroidered Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Jamawar<br />
        <br />
        <span className="font-bold">Buttons:</span>  Metal <br />
        <span className="font-bold">Colour:</span> Green Gold
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/10.jpeg"], // Add image URL here
  },
  {
    id: 53,
    name: "R-P 1 Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Silk <br />
        <span className="font-bold">Embellishment:</span>  Fully Hand Embroidered Front - Sleeves - Collar
        <br />
        <span className="font-bold">Buttons:</span>  Hidden Placket <br />
        <span className="font-bold">Colour:</span>Fone
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/11.jpeg"], // Add image URL here
  },
  {
    id: 54,
    name: "AB Ari Mehndi Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>Raw Silk<br />
        <span className="font-bold"> Embellishment:</span> Machine Embroidered 
        <br />
        <span className="font-bold">Buttons:</span> Hidden Placket<br />
        <span className="font-bold">Colour:</span> Mehendi Green

        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/12.jpeg"], // Add image URL here
  },
  {
    id: 55,
    name: "AB-MNR Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Jamawar<br />
        <span className="font-bold"> Embellishment:</span> : Machine Embroidery + Hand Embroidered 
        <br />
        <span className="font-bold">Buttons:</span> Hidden Placket <br />
        <span className="font-bold">Colour:</span>  Green
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/13.jpeg"], // Add image URL here
  },
  {
    id: 56,
    name: "Side Motif Rufi Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Jamawar <br />
        <span className="font-bold"> Embellishment:</span>  Hand Embroidered Shoulders
        <br />
        <span className="font-bold">Buttons:</span> Metal <br />
        <span className="font-bold">Colour:</span> Offwhite / Gold
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/14.jpeg"], // Add image URL here
  },
  {
    id: 57,
    name: "Maroon Embroidered Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Jamawar <br />
        <span className="font-bold">Buttons:</span> Metal <br />
        <span className="font-bold">Colour:</span> Maroon
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/15.jpeg"], // Add image URL here
  },
  {
    id: 58,
    name: "Suiting Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Suiting <br />
        <span className="font-bold"> Embellishment:</span>   Hand Embroidered Motif Below Pocket
        <br />
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Black
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/16.jpeg"], // Add image URL here
  },
  {
    id: 59,
    name: "Khaddar Embroidered Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Khaddar <br />
        <span className="font-bold">Buttons:</span>Metal <br />
        <span className="font-bold">Colour:</span> Offwhite / Skin
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/17.jpeg"], // Add image URL here
  },
  {
    id: 60,
    name: "Side Motif Mor Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Jamawar<br />
        <span className="font-bold">Embellishment:</span>  Hand Embroidered Shoulder Motif
        <br />
        <span className="font-bold">Buttons:</span> Metal <br />
        <span className="font-bold">Colour:</span> Offwhite / Gold
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/18.jpeg"], // Add image URL here
  },
//////61skipped/////
  {
    id: 62,
    name: "Sky Blue Atlas Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Atlas<br />
        
        <span className="font-bold">Buttons:</span>  Metal<br />
        <span className="font-bold">Colour:</span>  Sky Blue
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/19.jpeg"], // Add image URL here
  },
  {
    id: 63,
    name: "Green Atlas Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Atlas<br />
        <span className="font-bold">Buttons:</span> Metal <br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/20.jpeg"], // Add image URL here
  },
  {
    id: 64,
    name: "Side Motif Off-white Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Jacquard<br />
        <span className="font-bold"> Embellishment:</span>   Hand Embroidered Front Motif - Collar 
        <br />
        <span className="font-bold">Buttons:</span>  Metal<br />
        <span className="font-bold">Colour:</span> Offwhite
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/21.jpeg"], // Add image URL here
  },
  {
    id: 65,
    name: "ADORI Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>Self Printed Atlas<br />
        <span className="font-bold">Embellishment:</span>  Dori work + Hand Embroidered Front - Sleeves - Collar
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/22.jpeg"], // Add image URL here
  },
  {
    id: 66,
    name: "Rusty Self Embroidered Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Jacquard
        <br />
        
        <span className="font-bold">Buttons:</span>Metal<br />
        <span className="font-bold">Colour:</span> Rusty Orange
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/23.jpeg"], // Add image URL here
  },
  {
    id: 67,
    name: "3-D Black Prince Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Aurgenza <br />
        <span className="font-bold"> Embellishment:</span>  Collar
        <br />
        <span className="font-bold">Buttons:</span> Hidden Placket<br />
        <span className="font-bold">Colour:</span> Black
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/24.jpeg"], // Add image URL here
  },
  {
    id: 68,
    name: "6 Green Atlas Motif Plain Coat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "prince coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/PRINCECOAT/25.jpeg"], // Add image URL here
  },
  ///////////////////////////////////////PRINCE CAOT END////////////////////////////////////////////////


 ////////////////////ALLLLLL WAIST COAT////////////////////////////
  {
    id: 71,
    name: "Tissue Border Payzli",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Tissue<br /> 
        <span className="font-bold">Embellishment</span>  Heavy Embroidered Borders - Collar<br />  
 
        <span className="font-bold">Buttons:</span>  Hidden <br />
        <span className="font-bold">Colour:</span> Golden
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/1.jpeg"

    ], 
  },
  {
    id: 72,
    name: "Atlas Waisctoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Black 
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/2.png"]
  },
  {
    id: 73,
    name: "Love-Story Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Teal Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/3.jpeg"]
  },
  {
    id: 74,
    name: "F-S Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Indian Modi Silk<br /> 
        <span className="font-bold">Embellishment:</span>Ari Embroidery on Front - Collar<br />
 
        <span className="font-bold">Buttons:</span>  Hidden<br />
        <span className="font-bold">Colour:</span>Blue
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/4.jpeg"]
  },
  {
    id: 75,
    name: "Offwhite Suiting Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Tropical Suiting<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Off-white
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/5.jpeg"]
  },
  {
    id: 76,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span>Black - Gold
        <br />
      </p>
    ),    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/6.jpeg"]
  },
  {
    id: 77,
    name: "A-B Embroidery Collar ",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Jamawar<br />  
        <span className="font-bold">Embellishment</span> Collar Dori Embroidered <br />

        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Skin Gold
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/7.jpeg"]
  },
  {
    id: 78,
    name: "Motif Collar Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Jamawar<br />  
        <span className="font-bold">Embellishment</span>Hand Embroidered Motif on front + Collar <br />

        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Off-white
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/8.jpeg"]
  },
  {
    id: 79,
    name: "A-B Dori Black Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Embellishment</span>Dori Machine Embroidered Front - Collar <br />

        <span className="font-bold">Buttons:</span> Hidden<br />
        <span className="font-bold">Colour:</span> Black
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/9.jpeg"]
  },
  {
    id: 80,
    name: "O-G Brown Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Cotton<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Brown
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/10.jpeg"]
  },
  {
    id: 81,
    name: "A-B Ari Green Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Raw Silk
        <br />  
        <span className="font-bold">Embellishment</span> Ari Machine Work on Front - Collar <br />
        <span className="font-bold">Colour:</span>Bottle Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/11.jpeg"]
  },
  {
    id: 82,
    name: "A-B Dori Green Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Raw Silk<br />  
        <span className="font-bold">Embellishment</span>Dori Machine Work on Front - Collar <br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/12.jpeg"]
  },
  {
    id: 83,
    name: "Mor Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Tissue<br />  
        <span className="font-bold">Embellishment</span> Hand Embroidery on Peacocks and Front Spray + Collar <br />
        <span className="font-bold">Colour:</span> Gold
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/13.jpeg"]
  },
  {
    id: 84,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Teal Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/14.png"]
  },
  {
    id: 85,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Mehendi Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/15.jpeg"]
  },
  {
    id: 86,
    name: "R-P Waiscoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Silk<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span>Fone Pink
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/16.jpeg"]
  },
  {
    id: 87,
    name: "A-B Velvet Black Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Velvet<br />  
        <span className="font-bold">Embellishment</span> Machine Embroidered Front - Collar <br />

        <span className="font-bold">Buttons:</span>Hidden<br />
        <span className="font-bold">Colour:</span>  Black - Grey
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/17.jpeg"]
  },
  {
    id: 88,
    name: "5D-2 Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Kundan Zari<br /> 
        <span className="font-bold">Embellishment</span> Heavily Embroidered Front - Collar <br />
 
        <span className="font-bold">Buttons:</span>Hidden<br />
        <span className="font-bold">Colour:</span> Gold
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/18.jpeg"]
  },
  {
    id: 89,
    name: "A-B Green Dori Panel",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>   Raw Silk<br />  
        <span className="font-bold">Embellishment</span> Hand + Machine Embroidered Front - Collar<br />

        <span className="font-bold">Buttons:</span> Hidden<br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/19.jpeg"]
  },
  {
    id: 90,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/20.jpeg"]
  },
  {
    id: 91,
    name: "Front Line Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Tropical Suiting<br />  
        <span className="font-bold">Embellishment</span>Front Line Hand Embroidered Motif<br />

        <span className="font-bold">Buttons:</span> Hidden<br />
        <span className="font-bold">Colour:</span> White
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/21.jpeg"]
  },
  {
    id: 92,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span>Mehendi Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/22.png"]
  },
  {
    id: 93,
    name: "Rust Motif Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br /> 
        <span className="font-bold">Embellishment</span> Hand Embroidered Front Motifs - Collar <br />
 
        <span className="font-bold">Buttons:</span> Hidden<br />
        <span className="font-bold">Colour:</span> Rust
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/23.jpeg"]
  },
  {
    id: 94,
    name: "FSQ Ice Blue Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Silk<br />  
        <span className="font-bold">Buttons:</span> Hidden<br />
        <span className="font-bold">Colour:</span> Ice Blue

        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/24.png"]
  },
  {
    id: 95,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span>  Black
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/25.jpeg"]
  },
  {
    id: 96,
    name: "Chicken Kari Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Embroidered Krundy<br />  
        <span className="font-bold">Buttons:</span> Off-white<br />
        <span className="font-bold">Colour:</span> Hidden
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/26.png"]
  },
  {
    id: 97,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Dark Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/27.jpeg"]
  },
  {
    id: 98,
    name: "KM Mor Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Printed Jamawar<br />  
        <span className="font-bold">Embellishment</span> Hand Embellished Front - Collar <br />

        <span className="font-bold">Buttons:</span>  Teal Blue<br />
        <span className="font-bold">Colour:</span> Hidden
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/28.png"]
  },
  {
    id: 99,
    name: "A-B Dori Pink Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>   Self Printed Dyed Jamawar<br />  
        <span className="font-bold">Embellishment</span> Machine Dori Embroidered Front - Collar <br />

        <span className="font-bold">Buttons:</span>Dyed Pink<br />
        <span className="font-bold">Colour:</span> Hidden

        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/29.jpeg"]
  },
  {
    id: 100,
    name: "Green Tropical Waisctoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Tropical<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: ["https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/30.jpeg"]
  },
  {
    id: 101,
    name: "Atlas Waistcoat",
    price: 19999,
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span>  Self Printed Atlas<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Green
        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/31.jpeg"]
  },   
  {
    id: 137,
    name: "‘Fateh-1’ Waist Coat",
    description: (
      <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        <span className="font-bold">Fabric:</span> Self Embroidered Jacquard<br />  
        <span className="font-bold">Embellishment:</span> Hand Embroidered Collar<br />  
        <span className="font-bold">Buttons:</span> Metal<br />
        <span className="font-bold">Colour:</span> Ice Blue<br />  
        <span className="font-bold">Inner Suit:</span>White Pakistani Raw Silk

        <br />
      </p>
    ),
    category: "Waist coat",
    images: [ "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/Fateh%201%20waist%20coat%20(1).jpeg",
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/Fateh%201%20waist%20coat%20(2).jpeg",
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/Fateh%201%20waist%20coat%20(3).jpeg",
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/allwaistcoat/Fateh%201%20waist%20coat%20(4).jpeg"
    ]
  },   



  /////////////////////////////////////////////////Accessories///////////////////////////////////////////
      {
      id: 130,
      name: "‘Hatf’ Shoes",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>Computer Embroidered Jamawar <br />
          <span className="font-bold">Colour:</span>Green base + Golden embroidery<br />
          <span className="font-bold">Sole:</span>Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%201%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%201%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%201%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%201%20(4).jpeg",
      ],
      category: "Accessories",

    },
       {
      id: 131,
      name: "‘Shaheen’ Shoes",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span>Tropical <br />
          <span className="font-bold">Embroidery</span>  Machine Tilla Embroidery <br />
          <span className="font-bold">Colour:</span>Olive Green<br />
          <span className="font-bold">Sole:</span> Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%202%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%202%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%202%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%202%20(4).jpeg",
      ],
      category: "Accessories",

    },

          {
      id: 132,
      name: "‘Nasr’ Shoes",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Colour:</span> Mehendi Green<br />
          <span className="font-bold">Sole:</span> Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%203%20(1).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%203%20(2).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%203%20(3).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%203%20(4).jpeg"
      ],
      category: "Accessories",

    },

          {
      id: 133,
      name: "‘Fateh’ Shoes",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas <br />
          <span className="font-bold">Colour:</span> Ice Blue<br />
          <span className="font-bold">Embroidery</span>  Hand Embellished <br />
          <span className="font-bold">Sole:</span> Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%204%20(1).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%204%20(2).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%204%20(3).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%204%20(4).jpeg"
      ],
      category: "Accessories",

    },

          {
      id: 134,
      name: "‘Babar’ Khussa",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Embroidered Kundan Zari<br />
          <span className="font-bold">Colour:</span> Coffee-Gold<br />
          <span className="font-bold">Sole:</span> Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%205%20(1).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%205%20(2).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%205%20(3).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%205%20(4).jpeg"
      ],
      category: "Accessories",

    },

    
          {
      id: 135,
      name: "‘Raad’ Khussa (Saleem-Shahi)",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas<br />
          <span className="font-bold">Colour:</span> Rusty Orange<br />
          <span className="font-bold">Sole:</span> Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%206%20(1).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%206%20(2).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%206%20(3).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%206%20(4).jpeg"
      ],
      category: "Accessories",

    },

       {
      id: 136,
      name: "‘Harbay’ Khussa (Saleem-Shahi)",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Printed Atlas<br />
          <span className="font-bold">Colour:</span> Dark Green<br />
          <span className="font-bold">Sole:</span> Leather<br />
          <span className="font-bold">Inner:</span>Velvet Padded<br />

        </p>
      ),
      images: [ 
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%207%20(1).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%207%20(2).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%207%20(3).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%207%20(4).jpeg"
      ],
      category: "Accessories",

    },
    //////////////////////////////////////////////NEW COLLECTION 138 START////////////////////
     {
      id: 138,
      name: "‘Babar’ Sherwani",
      description: (
        <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
          <span className="font-bold">Fabric:</span> Self Embroidered Kundan Zari<br />
                    <span className="font-bold">Embellishment:</span> Hand Embroidered Collar<br />
                    <span className="font-bold">Buttons:</span>Hidden Placket<br />
                    <span className="font-bold">Colour:</span> Coffee Gold<br />
                    <span className="font-bold">Inner Suit:</span>Gold Pakistani Raw Silk<br />



        </p>
      ),
      images: [ 
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RanjhaCollection/pro%201%20%20(2).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RanjhaCollection/pro%201%20%20(3).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RanjhaCollection/pro%201%20%20(4).jpeg",
       "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/RanjhaCollection/pro%201%20%20(1).jpeg"
      ],
      category: "Accessories",

    },
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("Select Size");
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  // 🔁 Related Products with Category Filter
  const relatedProducts = products.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  );

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(relatedProducts.length / itemsPerPage);

  const displayRelatedProducts = relatedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!product) {
    return <p className="text-center text-red-500 mt-20">Product not found</p>;
  }

  const handleBack = () => navigate(-1);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("URL copied to clipboard!");
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextProduct = () => {
    const currentIndex = products.findIndex((p) => p.id === product.id);
    const next = products[(currentIndex + 1) % products.length];
    navigate(`/product/${next.id}`);
  };

  const prevProduct = () => {
    const currentIndex = products.findIndex((p) => p.id === product.id);
    const prev = products[(currentIndex - 1 + products.length) % products.length];
    navigate(`/product/${prev.id}`);
  };

  return (
<div className="max-w-screen-xl mx-auto pt-20 md:pt-36 pb-20 px-4">
      <div className="flex justify-between mb-2">
        <div className="mb-4 pt-6">
          <button
            onClick={handleBack}
            className="flex items-center text-black hover:text-gray-800 transition-all duration-300 ease-in-out p-2"
          >
            <span className="text-3xl mr-2">&larr;</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={prevProduct}
            className="p-2 text-xl text-black hover:bg-gray-300 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextProduct}
            className="p-2 text-xl text-black hover:bg-gray-300 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="object-cover rounded-lg shadow-md cursor-pointer transition duration-200 ease-in-out"
              onClick={() => openModal(index)}
            />
          ))}
        </div>

        <div className="w-full lg:w-1/2 bg-white p-4 rounded-xl">
          <h1 className="text-[#232323] text-[20px] leading-[30px] text-left tracking-normal font-josefin font-bold">
            {product.name}
          </h1>
          <p className="text-gray-950 mt-4 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
            {product.description ? (
              <span>{product.description}</span>
            ) : (
              <span>No description available.</span>
            )}
          </p>

  <div className="mt-6">
  <h2 className="text-lg font-medium text-black">
    Size: <span className="font-semibold">{selectedSize}</span>
    <InformationCircleIcon
      className="inline-block w-5 h-5 text-gray-500 cursor-pointer ml-2"
      onClick={() => setIsSizeGuideOpen(true)} // Open size guide modal
    />
  </h2>

  <div className="flex gap-4 mt-2">
    {/* Render size options for "S", "M", "L", "XL" except for product ids in the excluded list */}
    {![130, 131, 132, 133, 134, 135, 136].includes(product.id) && ["S", "M", "L", "XL"].map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className="px-4 py-2 text-sm font-semibold border border-[#363636] text-white bg-[#363636] hover:bg-gray-700 transition duration-300"
      >
        {size}
      </button>
    ))}

    {/* Render size options for "40", "41", "42", "43" for product ids in the excluded list */}
    {![130, 131, 132, 133, 134, 135, 136].includes(product.id) && null}

    { [130, 131, 132, 133, 134, 135, 136].includes(product.id) && [40, 41, 42, 43].map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className="px-4 py-2 text-sm font-semibold border border-[#363636] text-white bg-[#363636] hover:bg-gray-700 transition duration-300"
      >
        {size}
      </button>
    ))}
    
    {/* Share Button */}
   <button
  onClick={handleShare}
  className="w-full sm:w-auto flex items-center justify-center gap-1 px-1.5 py-0.5 text-[9px] sm:px-6 sm:py-2 sm:text-sm font-semibold border border-[#363636] text-black bg-transparent hover:bg-black hover:text-white transition duration-300"
>
  <FiShare2 className="w-2 h-2 sm:w-4 sm:h-4" />
  Share
</button>

  </div>



          </div>
          {/* View Size Chart and Bespoke Tailoring Buttons */}
          <div className="mt-4 flex gap-4">
            {/* View Size Chart Button */}
            <button
              onClick={() => setIsSizeChartOpen(true)}
              className="w-[200px] py-2 text-[14px] font-medium text-[#232323] text-center border border-gray-500 bg-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out font-[Josefin Sans, Arial]"
            >
              View Size Chart
            </button>

            {/* Bespoke Tailoring Button */}
            <button
              onClick={() => window.open('/bespoke-tailoring', '_blank')}  // Open the page for Bespoke Tailoring
              className="w-[200px] py-2 text-[14px] font-medium text-[#232323] text-center border border-gray-500 bg-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out font-[Josefin Sans, Arial]"
            >
              Bespoke Tailoring
            </button>
          </div>

          <div className="mt-5">
                   <a
  href={`https://wa.me/923444447759?text=${encodeURIComponent(
    `Hello, I'm interested in the product: ${product.name}\n\nDescription: ${product.description}\nSize: ${selectedSize}\nQuantity: ${quantity}\nImage: ${product.images[modalImageIndex]}`
  )}`}
  className="block w-full py-3 text-[14px] font-medium text-[#232323] text-center border border-gray-500 rounded-none bg-transparent hover:bg-green-500 hover:text-white transition duration-300 ease-in-out font-[Josefin Sans, Arial]"
  target="_blank"
  rel="noopener noreferrer"
>
Prices? Contact us on WhatsApp
</a>
          </div>

          {/* Description, Shipping, and Disclaimer Links */}
          <div className="mt-8 space-y-4">
  <div
    className="flex items-center justify-between cursor-pointer"
    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
  >
    <button className="text-[14px] leading-[20px] text-[#1a1a1a] text-left tracking-[0.7px] font-josefin font-semibold hover:border-b-2 hover:border-gray-400 transition-all ease-in-out">
      DESCRIPTION
    </button>
    <ChevronDownIcon
      className={`w-5 h-5 transition-transform ${
        isDescriptionOpen ? "transform rotate-180" : ""
      }`}
    />
  </div>
  <div
    className={`transition-all duration-700 ease-in-out ${
      isDescriptionOpen ? "h-auto max-h-[500px] opacity-100" : "h-0 overflow-hidden opacity-0"
    }`}
  >
    {isDescriptionOpen && (
      <p className="mt-2 text-gray-950 text-[12px] leading-[20px] text-left tracking-normal font-josefin">
        {product.description}
      </p>
    )}
  </div>
  <div className="w-full h-0.5 bg-gray-300 mt-2"></div>


            {/* Shipping Section */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsShippingOpen(!isShippingOpen)}
            >
              <button className="text-[14px] leading-[20px] text-[#1a1a1a] text-left tracking-[0.7px] font-josefin font-semibold hover:border-b-2 hover:border-gray-400 transition-all ease-in-out">
                SHIPPING
              </button>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${
                  isShippingOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`transition-all duration-700 ease-in-out ${
                isShippingOpen ? "h-auto max-h-[500px] opacity-100" : "h-0 overflow-hidden opacity-0"
              }`}
            >
              {isShippingOpen && (
                <p className="mt-2 text-sm text-[#1a1a1a] font-josefin font-semibold">
                  * Delivery charges are separate and we do not bear any damages caused during delivery 
                  <br />
                  * Delivery time and rate varies company to company and we only recommend you to choose either DHL, Fedex or UPS
                  <br />
                  * Delivery charges will be told when the product is ready to be shipped
                  
                </p>
              )}
            </div>
            <div className="w-full h-0.5 bg-gray-300 mt-2"></div>

            {/* Disclaimer Section */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
            >
              <button className="text-[14px] leading-[20px] text-[#1a1a1a] text-left tracking-[0.7px] font-josefin font-semibold hover:border-b-2 hover:border-gray-400 transition-all ease-in-out">
                DISCLAIMER
              </button>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${
                  isDisclaimerOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`transition-all duration-700 ease-in-out ${
                isDisclaimerOpen ? "h-auto max-h-[500px] opacity-100" : "h-0 overflow-hidden opacity-0"
              }`}
            >
              {isDisclaimerOpen && (
                <p className="mt-2 text-sm text-[#1a1a1a] font-josefin font-semibold">
                  * Actual colour of the product may vary from the photo, due to different lighting conditions 
                  <br />
                  * We don’t take any responsibility for sizes, we make as per the provided measurements 
                  <br />
                  * No claims for any type fabrics
                    <br />
                * Extra charges will be applied for size above Chest: 42  Length: 45
                </p>
              )}
            </div>
            <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
          </div>
        </div>
      </div>
{/* Size Chart Modal */}
{isSizeChartOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div className="bg-white p-4 rounded-lg shadow-lg relative w-auto max-w-[95%] sm:max-w-[90%] md:max-w-[600px]">
      <button
        onClick={() => setIsSizeChartOpen(false)}
        className="absolute top-[-15px] right-[-5px] text-black text-5xl font-semibold"
      >
        &times; {/* Cross icon to close the modal */}
      </button>

      {/* Conditionally render different size chart images based on the product id */}
      { [130, 131, 132, 133, 134, 135, 136].includes(product.id) ? (
        <img
          src="https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/Accersiores-SHOES/shoe%20size%20chart.jpeg" // Replace with the alternative image URL for product ids 130-136
          alt="Size Chart"
          className="w-full h-auto max-w-full mx-auto"
        />
      ) : (
        <img
          src="https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/SIZE%20CHART.jpeg" // Default size chart image for all other products
          alt="Size Chart"
          className="w-full h-auto max-w-full mx-auto"
        />
      )}
    </div>
  </div>
)}


{/* Related Products Section */}
<div className="mt-16 w-full bg-white py-12 px-4">
  <h2
    className="text-3xl font-serif font-semibold text-gray-800 text-left mb-8"
    style={{
      fontFamily: 'Playfair Display, serif',
      fontSize: '24px',
      lineHeight: '30px',
      textAlign: 'left',
      letterSpacing: 'normal',
      color: '#232323',
      backgroundColor: '#ffffff',
      opacity: 1,
    }}
  >
    RELATED PRODUCTS
  </h2>

  <div className="relative">
    {/* Left Pagination Button */}
    <button
      onClick={prevPage}
      className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white text-black py-3 px-4 rounded-full border-2 border-black text-xl hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 hidden md:block z-10"
      style={{
        fontSize: '1.2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      &lt;
    </button>

    {/* Scrollable Product Cards */}
    <div
      className="flex overflow-x-auto gap-6 py-4 px-6"
      style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE 10+
      }}
    >
      {/* Hides scrollbar in WebKit (Chrome, Safari) */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Display first 4 products initially */}
      {displayRelatedProducts.slice(0, 4).map((prod) => (
        <div
          key={prod.id}
          className="w-[250px] flex-shrink-0 relative transition-transform duration-300"
        >
          {/* Product Image (Only one, static) */}
          <div className="w-full h-[350px] relative">
            <img
              src={prod.images[0]}
              alt={prod.name}
              className="object-contain w-full h-full"
              onClick={() => navigate(`/product/${prod.id}`)}
            />
          </div>

          {/* Product Name */}
          <h3
            className="mt-4 text-center text-xl font-medium"
            style={{
              fontFamily: '"Josefin Sans", Arial, sans-serif',
              fontSize: '12px',
              lineHeight: '22px',
              textAlign: 'center',
              letterSpacing: 'normal',
              color: '#232323',
            }}
          >
            {prod.name}
          </h3>
        </div>
      ))}
    </div>

    {/* Right Pagination Button */}
    <button
      onClick={nextPage}
      className="absolute right-[35px] top-1/2 transform -translate-y-1/2 bg-white text-black py-3 px-4 rounded-full border-2 border-black text-xl hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300 hidden md:block z-10"
      style={{
        fontSize: '1.2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      &gt;
    </button>
  </div>
</div>



      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all"
    onClick={closeModal}
  >
    <div
      className="relative bg-transparent rounded-lg p-0 w-full max-w-full flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Back Button */}
      <button
        onClick={() =>
          setModalImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
          )
        }
        className="absolute left-2 md:left-8 text-white bg-[#333] hover:bg-[#555] transition duration-300 rounded p-2 md:p-3 shadow-md"
        aria-label="Previous Image"
      >
        <span className="text-xl md:text-2xl">&#8592;</span>
      </button>

      {/* Image */}
      <img
        src={product.images[modalImageIndex]}
        alt="Product"
        className="w-full h-auto object-contain max-h-[90vh] rounded-lg mx-8 md:mx-12"
      />

      {/* Next Button */}
      <button
        onClick={() =>
          setModalImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
          )
        }
        className="absolute right-2 md:right-8 text-white bg-[#333] hover:bg-[#555] transition duration-300 rounded p-2 md:p-3 shadow-md"
        aria-label="Next Image"
      >
        <span className="text-xl md:text-2xl">&#8594;</span>
      </button>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl font-bold bg-[#333] hover:bg-[#555] transition duration-300 rounded p-1.5 md:p-2 shadow-md"
        aria-label="Close Modal"
      >
        &times;
      </button>
    </div>
  </div>
)}
    
    </div>
  );
};

export default ProductDetail;
