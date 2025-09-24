// Banner.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Secure Your Future Today",
    description:
      "Explore life insurance plans tailored for you and your family. Protect what matters most.",
    buttonText: "Explore Policies",
    buttonLink: "/allPolicies",
    bgImage:
      "https://i.ibb.co.com/p6cZTR8N/logan-weaver-lgnwvr-xjy-HDn-A93-Pk-unsplash.jpg", // family / insurance
  },
  {
    id: 2,
    title: "Manage Policies Easily",
    description:
      "Keep track of your policies, payments, and claims all in one place with our dashboard.",
    buttonText: "Go to Dashboard",
    buttonLink: "/dashboard",
    bgImage:
      "https://i.ibb.co.com/NdsBjWT5/dylan-gillis-Kdeq-A3a-Tn-BY-unsplash.jpg", // dashboard / tech
  },
  {
    id: 3,
    title: "Get Trusted Advice",
    description:
      "Learn tips and get professional advice to choose the right insurance plans for you.",
    buttonText: "Learn More",
    buttonLink: "/blog",
    bgImage:
      "https://i.ibb.co.com/bMKYXkmd/naomi-hebert-MP0bga-S-d1c-unsplash.jpg", // advice / consultation
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 my-7">
      <Slider {...settings}>
        {slides.map(
          ({ id, title, description, buttonText, buttonLink, bgImage }) => (
            <div key={id}>
              <div
                className="h-[250px] sm:h-[300px] md:h-[400px] flex flex-col justify-center items-start px-6 sm:px-8 text-white rounded-lg"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 drop-shadow-lg">
                  {title}
                </h2>
                <p className="mb-4 sm:mb-6 max-w-full sm:max-w-lg drop-shadow-lg">
                  {description}
                </p>
                <a
                  href={buttonLink}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 rounded shadow-lg transition"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Banner;
