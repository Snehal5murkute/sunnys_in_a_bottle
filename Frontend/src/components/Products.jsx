import React, { useState, useRef } from "react";
import ProdutHero from "../assets/ProductMainImg.webp";
import greek from "../assets/GREEK.webp";
import  garlic from "../assets/FRENCH VINAIGRETTE.webp";
import thai from "../assets/GINGER.webp";
import balsamic from "../assets/SRIRACHA.webp";
import { FaArrowRight } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const products = [
  {
    name: "GREEK",
    shortDesc:
      "A harmonious blend of olive oil, garlic and lemon, perfect for salads.",
    fullDesc:
      "A harmonious blend of olive oil, garlic and lemon, that brings the flavours of the Aegean to the table. It is used mainly in salads, but the dressing can be used with great effect in grilled vegetables, and anywhere you need to add its particular piquant flavour.",
    img: greek,
  
    quantity: "150ml",
    price: 250,
  },
  {
    name: "THAI GINGER",
    shortDesc:
      "Lemon and ginger create an Asian-inspired vegetarian salad dressing.",
    fullDesc:
      "A refreshing take on the combination of lemon and ginger, the dressing imparts great flavours to create an Asian inspired salad, vegetarian and non-vegetarian. The dressing is made without fish sauce, to keep it vegetarian, but a fish sauce variant can be made available. Apart from salads it can be used on fresh fruit, especially fruit that is not intrinsically sweet.",
    img: thai,
    quantity: "150ml",
    price: 250,
  },
  {
    name: "FRENCH VINAIGRETTE",
    shortDesc: "Classic sunflower oil, Dijon mustard, and garlic combination.",
    fullDesc:
      "This is a variation of the classic refined sunflower oil, Dijon mustard and garlic combination. The dressing is great for vegetarian salads, and when combined with a little mayonnaise, it works as a base for seafood and chicken salads as well.",
    img: garlic,
    quantity: "150ml",
    price: 250,
  },
  {
    name: "BALSAMIC",
    shortDesc: "Relish the warmth and nostalgia of home-cooked meals.",
    fullDesc:
      "Relish the warmth and nostalgia of home-cooked meals. Perfect for enhancing flavor in your salads, vegetables, and grilled dishes.",
    img: balsamic,
    quantity: "150ml",
    price: 250,
  },
];



// Sample data for 10 stores
const stores = [
  { name: "Nature's Basket, CMH Road", address: "Ward No. 80, Ward Name, Ground Floor, 723, C.M.H. Main Road 1st Binnamangala Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038" },
  { name: "Nature's Basket", address: "No.9, 17th A Main Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095" },
  { name: "Nature's Basket", address: "Pragathi Property No. 2759, next to Hotel Swathi Gardenia, E Block, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092" },
  { name: "Nature's Basket", address: "No. 7 M-215, 7 th Main Road (80 Feet Road 3rd E-F Cross Road 1st block, HRBR Layout, Kalyan Nagar, 3rd E-F Cross Road, Banaswadi, Bengaluru, Karnataka 560043" },
  { name: "Nature's Basket", address: "JM Plaza. 35, (old 196), 2nd Main, Sankey Rd, Sadashiva Nagar, Bengaluru, Karnataka 560080" },
  { name: "Nature's Basket", address: "Park End, 13, Rhenius St, Richmond Town, Bengaluru, Karnataka 560025" },
  { name: "Nature's Basket, Artisan Pantry", address: "Monarch Centaurus Kensington Road, MG Road, opposite 1 Mg, Yellappa Garden, mall, Sivanchetti Gardens, Bengaluru, Karnataka 560008" },
  { name: "Nature's Basket, RMZ ECO World", address: "Unit No. 20 & 21, EcoWorld 30, Campus 31, The Retail Street, RMZ Ecoworld Rd, Adarsh Palm Retreat, Bellandur, Bengaluru, Karnataka 560103" },
  { name: "Bangalore Club", address: "No.10, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025" },
  { name: "New Fruit Land", address: "No. 583,9th  Main Road Off CMH Road, INdira Nagar 1st Stage, Defnce Colony Bengaluru,Karnataka 560038" },
  {name:"Thom's Bakery & Supermarket", address:"1/2, Wheeler Rd, Pulikeshi Nagar, Frazer Town, Bengaluru, Karnataka 560005"},
];

const ProductPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const detailsRef = useRef(null);

  const handleSelectProduct = (index) => {
    setSelectedIndex(index);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const nextProduct = () => {
    setSelectedIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="w-full bg-[#FDF2D2] ">
      {/* Hero Image */}
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-fit relative overflow-hidden">
        <img
          src={ProdutHero}
          className="w-full h-full object-contain  transition-all duration-700 z-2 "
          alt="Product Hero"
        />
      </div>

      {/* Horizontal product thumbnails */}
      <div className="px-6 sm:px-8 flex flex-wrap justify-center gap-8 sm:gap-16 my-12">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => handleSelectProduct(index)}
            className="cursor-pointer text-center p-2 rounded-lg transition w-[40%] sm:w-40 md:w-44 lg:w-48 hover:scale-105 duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-60 sm:h-64 object-contain mx-auto mb-2"
            />
            <h3 className="inter font-medium">{product.name}</h3>
            <div className="flex items-center justify-center gap-1 text-sm text-[#FF5203] font-medium mt-2">
              <span>Know More</span>
              <FaArrowRight className="inline-block" size={12} />
            </div>
          </div>
        ))}
      </div>


      {/* Product details card */}
      <div className="bg-[#DCE9A5] p-12 " ref={detailsRef}>
        <div className="max-w-5xl mx-auto relative bg-[#FEF3F3] rounded-xl p-8 sm:p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg overflow-hidden">
          {/* Left side: info */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {products[selectedIndex].name}
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              {products[selectedIndex].fullDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm mb-4">
              <div>
                <span className="font-semibold">Quantity: </span>
                {products[selectedIndex].quantity}
              </div>
              <div>
                <span className="font-semibold">Price: </span>₹
                {products[selectedIndex].price}
              </div>
            </div>
          </div>

          {/* Right side: image */}
          <div className="flex-1 flex justify-center mt-4 md:mt-0 ">
            <div className=" relative top-12 w-48 h-68 sm:w-46 sm:h-66 rounded-xl bg-[#D9D9D9] flex items-center justify-center shadow-lg">
              <img
                src={products[selectedIndex].img}
                alt={products[selectedIndex].name}
                className="w-60 h-70 sm:w-88 sm:h-88 object-contain"
              />
            </div>
          </div>

          {/* Single Next Button */}
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={nextProduct}
              className="p-3 sm:p-4 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>


        {/* Heading */}
      <div className="flex items-center gap-2 justify-center my-16 ">
        <HiLocationMarker className="text-3xl text-red-500" />
        <h2 className="text-3xl font-bold">Our Store Locations</h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
            <p className="text-gray-600">{store.address}</p>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default ProductPage;
