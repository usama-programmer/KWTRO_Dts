import React, { useEffect } from "react";
import Aos from "aos";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import wave from "../../assets/images/wave.png";

import "./cards.css";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="cards__container">
        <div
          className="cards__heading"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <p style={{ color: "#21B6FF", fontSize: "20px", fontWeight: "500" }}>
            Our Products
          </p>
          <h1>Choose your Product</h1>
          <img src={wave} />
        </div>
        <br />
        <br />
        <div className="product__card__main">
          <div className="product__card" data-aos="flip-left">
            <img className="card__image" src={card1} />
            <br />
            <h3 style={{ color: " #002c8f" }}>Reverse Osmosis System</h3>
            <br />
            <p className="service__cards__text">
              Reverse osmosis (hyper filtration), is used by Brackish Water
              Reverse Osmosis Systems to purify water and remove salts and other
              impurities...
            </p>
            <br />
            <button className="card__btn">Read More</button>
          </div>
          <div className="product__card" data-aos="flip-up">
            <img className="card__image" src={card2} />
            <br />
            <h3 style={{ color: " #002c8f" }}>Submerged Aerobic Filter</h3>
            <br />
            <p className="service__cards__text">
              This system consists of partially or totally submerged biological
              support material and improves the efficiency of biological
              filtration...
            </p>
            <br />
            <button className="card__btn">Read More</button>
          </div>

          <div className="product__card" data-aos="flip-right">
            <img className="card__image" src={card3} />
            <br />
            <h3 style={{ color: " #002c8f" }}>Electrolytic Chlorine Systems</h3>
            <br />
            <p className="service__cards__text">
              This generator produces chlorine and puts it directly in to the
              pool or spa from a low concentration of salt added to the pool
              water...
            </p>
            <br />
            <button className="card__btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
