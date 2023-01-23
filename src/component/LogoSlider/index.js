import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logoslider.css";
import { sliderImages } from "../../dummydata";
import wave from "../../assets/images/wave.png";
import "aos/dist/aos.css";

function LogoSlider() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="app__logoslider__main">
        <div className="logoslider__main__container">
          <h1
            className="logoslider_main_heading"
            data-aos="fade-down"
            data-aos-duration="2000"
            style={{ color: "#002c8f" }}
          >
            Our Clients
          </h1>
          <img data-aos="fade-down" src={wave} />
        </div>
        <div className="logoslider__container">
          <Slider {...settings}>
            {sliderImages.map((item) => (
              <div className="slider-images-div">
                <img className="slider-images" src={item.img}></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default LogoSlider;
