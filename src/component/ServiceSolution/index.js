import React, { useEffect } from "react";
import Aos from "aos";
import glass from "../../assets/images/glass.png";
import wave from "../../assets/images/wave.png";
import "./serviceSolution.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  const navigation = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <div className="servicesol__container">
          <h1
            className="service_main_heading"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Services & Solutions
          </h1>
          <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
        </div>
        <div className="main_div">
          <div className="main_divA">
            <div
              className="text1"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <h2 className="sub_heading">Water Treatment</h2>
              <br />
              <p className="paragraph" data-aos="fade-right">
                Innovative water treatment systems and solutions including
                reverse osmosis (RO), ultra-filtration (UF), ultra-violet (UV)
                light disinfection, granular activated carbon (GAC), organic
                tannin remediation and more.
              </p>
              <br />
              <span
                className="read-more"
                onClick={() => navigation("/waterTreatment")}
              >
                Read More
              </span>
            </div>
            <br />
            <br />
            <br />
            <div
              className="text2"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <h2 className="sub_heading">Waste Water Treatment</h2>
              <br />
              <p className="paragraph">
                Innovative water treatment systems and solutions including
                reverse osmosis (RO), ultra-filtration (UF), ultra-violet (UV)
                light disinfection, granular activated carbon (GAC), organic
                tannin remediation and more.
              </p>
              <br />
              <span
                className="read-more"
                onClick={() => navigation("/wasteWaterTreatment")}
              >
                Read More
              </span>
            </div>
          </div>

          <div className="service_section">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              className="service_section_image"
              src={glass}
            />
          </div>
          <div className="main_divB">
            <div
              className="text3"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <h2 className="sub_heading">Specialty Chemicals</h2>
              <br />
              <p className="paragraph">
                Innovative water treatment systems and solutions including
                reverse osmosis (RO), ultra-filtration (UF), ultra-violet (UV)
                light disinfection, granular activated carbon (GAC), organic
                tannin remediation and more.
              </p>
              <br />
              <span
                className="read-more"
                onClick={() => navigation("/specialtyChemicals")}
              >
                Read More
              </span>
            </div>
            <br />
            <br />
            <br />
            <div
              className="text4"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <h2 className="sub_heading">After Sales Services</h2>
              <br />
              <p className="paragraph">
                Innovative water treatment systems and solutions including
                reverse osmosis (RO), ultra-filtration (UF), ultra-violet (UV)
                light disinfection, granular activated carbon (GAC), organic
                tannin remediation and more.
              </p>
              <br />
              {/* <butto
                className="read-more"
                onClick={() => navigation("/afterSaleService")}
              >
                Read More
              </butto> */}
              <span
                className="read-more"
                onClick={() => navigation("/afterSaleService")}
              >
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
