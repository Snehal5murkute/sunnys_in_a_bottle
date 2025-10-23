import React, { useState } from "react";
import aboutImg from "../assets/aboutImg.png"; // replace with your image path

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const firstPart = "A large part of Arjun’s life has been spent in the United States, where he went immediately after finishing his schooling in Delhi.";
  const fullText = " At the University of the South in Sewanee, Tennessee, Arjun studied English Literature and Drama and graduated with honors. His twin passions (food and theater) came to the forefront in New York, where he went after graduation. From that time onwards, he became associated with some of New York’s finest restaurants as a serving person which automatically gave him access to the kitchen and truly American cuisine.";

  return (
    <section className="w-full py-10 md:py-32 lg:py-20 bg-[#FDF2D2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6 md:px-12">
        {/* Left side - framed container with background + image */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[460px] lg:h-[600px]">
            <div className="absolute inset-0 bg-[#FEF3F3] rounded-2xl"></div>
            <img
              src={aboutImg}
              alt="About"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain w-[250px] md:w-[320px] lg:w-[420px]"
            />
          </div>
        </div>

        {/* Right side - text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-800">
            ARJUN SAJNANI
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-[20px]">
            {firstPart}
            {readMore && fullText}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="flex items-center justify-center md:justify-center md:items-center gap-2 border border-[#AAAAAA] text-[#FF5203] bg-white px-6 py-2 rounded-xl hover:bg-[#FFF4F0] transition"
          >
            {readMore ? "Read Less" : "Read More"}
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Extra Sections */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-24 lg:mt-32 px-6 space-y-12 md:space-y-20">
        {/* Legacy of Sunny’s Restaurant */}
        <div>
          <h3 className="font-Futura text-xl md:text-2xl font-medium text-gray-800 mb-6 md:mb-8">
            Legacy of Sunny’s Restaurant
          </h3>
          <div className="space-y-4 md:space-y-6">
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              Sunny’s was started in September of 1995 by Arjun Sajnani and
              Vivek Ubhayakar, both of whom had recently returned from New York.
              From its very inception the restaurant had a certain je ne sais
              quoi factor that quickly propelled it to a singular category
              within the culinary scene in Bangalore. Offering a small menu of
              Italian and French cuisine, Sunny’s has always relied on the
              authenticity of its food and the purity and freshness of its
              produce to present a culinary vision that has remained intact to
              this day. In the growth process the menu has expanded and
              diversified to make it a truly international restaurant.
            </p>
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              A large part of Arjun’s life has been spent in the United States,
              where he went immediately after finishing his schooling in Delhi.
              At the University of the South in Sewanee, Tennessee, Arjun
              studied English Literature and Drama and graduated with honors.
              His twin passions (food and theater) came to the forefront in New
              York, where he went after graduation. From that time onwards, he
              became associated with some of New York’s finest restaurants as a
              serving person which automatically gave him access to the kitchen
              and truly American cuisine.
            </p>
          </div>
        </div>

        {/* Sunny’s In A Bottle */}
        <div>
          <h3 className="font-Futura text-xl md:text-2xl font-medium text-gray-800 mb-6 md:mb-8">
            Sunny’s In A Bottle
          </h3>
          <div className="space-y-4 md:space-y-6">
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              Given the popularity of the salads at Sunny’s it was always in the
              cards to eventually market the dressings and sauces which have
              stood the test of time through all these years. While the pandemic
              was disastrous for the restaurant and hospitality business, it did
              afford an opportunity for startup enterprises that had a
              marketable product. The contemporary householder needs quality
              products to add to their meals in order to satisfy the gourmet
              enthusiast in them, as well as provide wholesome, healthy meals.
              It was obvious from the very beginning that these quality products
              could become an essential part of any kitchen’s pantry
            </p>
            <p className="font-ABeeZee text-gray-600 text-base md:text-lg leading-7 md:leading-8">
              As a restaurateur and a chef, Arjun personally handled the menu at
              Sunny’s to ensure that quality and taste are its hallmarks. In the
              field of the Arts, Arjun has continued to work on prominent works
              by many playwrights, international and Indian, particularly the
              works of Girish Karnad with whom he shares the love for food and
              theater. Girish’s play Agni Mattu Mallai was made into a film Agni
              Varsha, by Arjun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
