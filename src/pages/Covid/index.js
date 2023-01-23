import React, { useEffect } from "react";
import "./covid.css";
import Aos from "aos";
import "aos/dist/aos.css";
import wave from "../../assets/images/wave.png";
import img1 from "../../assets/images/covid1.png";
import img2 from "../../assets/images/covid2.png";

const Covid = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="covid__container">
        <h1
          className="covid_main_heading"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Covid-<span style={{ color: "red" }}>19</span>
        </h1>
        <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="covid-main">
          <div className="covid-fclass">
            <img className="covid-image" src={img1} />
          </div>
          <br />
          <br />
          <br />
          <div className="covid-fclass">
            <img className="covid-image" src={img2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
