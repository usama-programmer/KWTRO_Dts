import React, { useEffect } from "react";
import "./career.css";
import wave from "../../assets/images/wave.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Career = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="career__container">
        <h1
          className="career_main_heading"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Careers
        </h1>
        <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignText: "center",
        }}
      >
        <div className="career-content" style={{}}>
          <p
            style={{
              fontSize: "14px",
              padding: "50px",
            }}
          >
            At KWT we are always increasing our staff strength, with
            experienced, dedicated and enthusiastic applicants. With over 90
            workers, of various nationalities, we offer some of best working
            benefits. Our company boasts of a dynamic work environment, with
            opportunities for training, career development and personal
            benefits. We also look for people with a zeal for delivering
            exceptional customer satisfaction, through great liaisons.
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
