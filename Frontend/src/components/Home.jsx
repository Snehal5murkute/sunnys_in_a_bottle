import React, { useState,useEffect } from "react";
import img1 from "../assets/home.png";
import img2 from "../assets/home1.jpg";
import img3 from "../assets/home2.jpg";
import img4 from "../assets/home3.jpg";
import bottles from "../assets/bottles.png";
import arrow from "../assets/arrow.png"
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  const features = [
    {
      img: "../src/assets/choose1.png",
      title: "Fresh Ingredients",
      desc: "We choose only the freshest and most authentic ingredients, sourced locally. Keeping the farm to fork time as minimal as possible. ",
    },
    {
      img: "../src/assets/choose2.png",
      title: "GLUTEN FREE",
      desc: "Our products are gluten free, if that's the choice you make.",
    },
    {
      img: "../src/assets/choose3.png",
      title: "ALL NATURAL",
      desc: "We use only the most authentic natural ingredients, with no artificial enhancers, colours or emulsifiers.  So your salads and other dishes taste clean, fresh and flavourful.",
    },
    {
      img: "../src/assets/choose4.png",
      title: "NO PRESERVATIVES",
      desc: "Our range has no artificial flavours, no preservatives. Ensuring they are what  they say they are.",
    },
    {
      img: "../src/assets/choose5.png",
      title: "VEGAN",
      desc: "All our products are vegan, including our Classic Ceasars dressings.So you can be sure you are eating right, eating healthy and eating your kind of food.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const handleToggle = () => setShowMore(!showMore);


 const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken = "YOUR_LONG_LIVED_ACCESS_TOKEN"; // Replace with your real token

    // Fetch profile info
    fetch(`https://graph.instagram.com/me?fields=id,username,profile_picture_url&access_token=${accessToken}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching profile:", err));

    // Fetch latest posts
    fetch(`https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&limit=4&access_token=${accessToken}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  

  return (
    <section className="w-full relative bg-[#FDF2D2]">
      {/* Carousel */}
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-auto relative overflow-hidden">
        {/* "w-full h-[80vh] relative overflow-hidden" */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-contain md:object-cover transition-all duration-700"
        />

        {/* Single Right Button with >> */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 text-xl font-bold"
        >
          &gt;&gt;
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
        {/* Left */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-5xl text-gray-800">
            <span className="font-medium inter text-[64px]" >Fresh. Bold.</span>
            <br />
            <span className=" inter font-bold text-[64px]">Sunny’s</span>
          </h1>
          <p className="text-gray-700">
            What started out as a small bistro in 1995, grew into one of
            Bengaluru's finest restaurants - Sunny’s - a one of a kind place
            with traditional, tried and tested sauces, salad dressings and
            marinades, that added a special flavour and taste to its dining
            offerings.
          </p>
          {showMore && (
            <div className="space-y-4 text-gray-700">
              <p>
                This legendary taste is now available in bottles, on shelves of
                premium supermarkets like Nature's Basket. Brought to you by
                Sunny’s Legendary chef Arjun Sajnani.
              </p>
              <p>
                What followed was the natural progression into products that one
                could take home and enjoy at one's own table - SUNNY'S IN A
                BOTTLE.
              </p>
              <p className="font-semibold">What makes us different?</p>
              <p>
                Our range of products are made with superior oils, flavourful
                and light, we use only fresh authentic ingredients that are
                sourced locally, as much as possible. They are emulsified
                naturally, no artificial thickeners, blended to ensure maximum
                taste.
              </p>
            </div>
          )}
          <button
            onClick={handleToggle}
            className="mt-4 px-6 py-2 border-2 border-[#FF5203] text-[#FF5203] rounded-2xl hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2"
          >
            {showMore ? "Show Less" : "Read More"} <FaArrowRight />
          </button>
        </div>

        {/* Right */}
        <div className="relative flex">
          <img
            src={bottles}
            alt="Food"
            className="w-[400px] h-[450px] object-cover rounded-xl"
          />
          <img
            src={arrow}
            alt="arrow"
            className="w-[93px] h-[176px] rotate-30 relative -left-2 top-10"
            />
        </div>
      </div>

      {/* Why Choose us */}
      <div className="text-center max-w-2xl mx-auto mb-12 mt-16">
        <h2 className=" inter text-3xl font-medium text-gray-800 mb-4">
          WHY CHOOSE US ?
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Dive into our wide range of culinary categories, each offering a
          delectable selection of dishes to satisfy every craving.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:px-20">
        {features.map((item, index) => {
          const words = item.desc.split(" ");
          const shortDesc =
            words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");

          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-40 object-contain mx-auto"
              />
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {expandedIndex === index ? item.desc : shortDesc}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-3 text-[#FF5203] font-medium flex items-center gap-1 hover:underline"
              >
                {expandedIndex === index ? "Show less" : "Read more"}{" "}
                <FaArrowRight />
              </button>
            </div>
          );
        })}
      </div>

      {/* Instagram Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          @sunnys_in_a_bottle
        </h2>

        {/* Instagram Feed (first 4 posts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <iframe
            src="https://www.instagram.com/p/C_3Dae3Bkpf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            className="w-full h-96 rounded-lg"
            frameBorder="0"
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/POST_ID_2/embed"
            className="w-full h-96 rounded-lg"
            frameBorder="0"
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/POST_ID_3/embed"
            className="w-full h-96 rounded-lg"
            frameBorder="0"
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/POST_ID_4/embed"
            className="w-full h-96 rounded-lg"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Home;

