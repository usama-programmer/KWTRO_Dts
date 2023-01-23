import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./aboutSection.css";
import wave from "../../assets/images/wave.png";
import pic from "../../assets/images/about-pic.jpg";

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="about__container__main">
        <div className="about__container">
          <h1
            className="service_main_heading"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            About US
          </h1>
          <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
        </div>
        <div className="main_div">
          <div data-aos="fade-right" className="main_divA">
            <div className="text1">
              <h2 className="about__sub__heading">Experience</h2>
              <p className="paragraph">
                Established in the 80’s .Our vast experience combined with the
                technical support / back up of all our principles has time and
                again reiterated our commitment to answering Industrial,
                Commercial and Domestic water treatment needs.
              </p>
            </div>
            <div className="text2">
              <h2 className="about__sub__heading">Dedicated Team</h2>
              <p className="paragraph">
                Customer service is our first priority and we’re here to resolve
                your problems 24/7. Our team will always be here to support you.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="main_divB">
            <div className="text3">
              <h2 className="about__sub__heading">Innovative Solutions</h2>
              <p className="paragraph">
                Adcance water treatment systems and solutions including reverse
                osmosis (RO), ultra-filtration (UF), ultra-violet (UV) light
                disinfection, organic tannin remediation and ore which purifies
                contaminated water upto 99.99% guaranteed.
              </p>
            </div>

            <div className="text4">
              <h2 className="about__sub__heading">Cost Effective</h2>
              <p className="paragraph">
                Experience, dedication and innovative thinking enables us to
                provide clients with effective cost solutions below industry
                standards.
              </p>
            </div>
          </div>
          <div className="about_section_image_div">
            <img
              data-aos="flip-right"
              className="about_section_image"
              src={pic}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
