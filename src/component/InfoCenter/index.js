import React, { useEffect } from "react";
import "./infoCenter.css";
import plantimg from "../../assets/images/plant.jpg";
import writeimg from "../../assets/images/write.jpg";
import membraneimg from "../../assets/images/membrane.jpg";
import watedimg from "../../assets/images/watet.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const InfoCenter = () => {
  const navigation = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <div>
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="infoCenter__heading"
          >
            Karachi Water Technology
          </h1>
          <br />
          <br />
        </div>
        <div>
          <p className="para1">
            Karachi Water Technologies was founded in late 90’s to cater to the
            growing needs of water treatment be in the form of desalination or
            waster water recycling.
          </p>
          <br />
          <p className="para2">
            Since 2005, KWT is providing its technical expertise in all sorts of
            water treatment technologies, whether its desalination plant or
            wastewater recycling plant and we under take the entire gamut of
            activities ranging from concept to commissioning of Industrial &
            Domestic Wastewater. KWT was formed to assemble Water Treatment
            Plants for Asian & Middle Eastern market.
          </p>
          <br />
          <p className="para3">
            We offer comprehensive Water Solutions supported by strategic
            planning, intensive research and customized marketing.
          </p>
        </div>
        <div>
          <h1 data-aos="fade-down" className="infoCenter__heading">
            Water Technologies
          </h1>
        </div>
        <div className="middle">
          <div>
            <h3 style={{ color: "#4ab2fd" }}>Membrane Technology</h3>
            <br />
            <div className="infocenter__image">
              <img
                data-aos="flip-right"
                className="mini__image"
                src={membraneimg}
              ></img>
            </div>
            <br />
            <p className="pa">
              Cross-Flow Membrane Filtration is a method of removing the
              majority of dissolved salts, organics, viruses, bacteria and
              pathogens from water….
            </p>
            <br />
            <button
              className="infocenter__btn"
              onClick={() => navigation("/spareAndConsumables")}
            >
              Read More
            </button>
          </div>

          <div>
            <h3 style={{ color: "#4ab2fd" }}>Waste Water Technologies</h3>
            <br />
            <div className="infocenter__image">
              <img
                data-aos="flip-right"
                className="mini__image"
                src={watedimg}
              ></img>
            </div>
            <br />
            <p className="pb">
              A variety of advanced technologies are available for the treatment
              of Polluted Water, Wastewater, and Sewage/Gray Water for reuse or
              disposal……
            </p>
            <br />
            <button
              className="infocenter__btn"
              onClick={() => navigation("/wasteWaterTreatment")}
            >
              Read More
            </button>
          </div>
        </div>
        <h1
          data-aos="fade-down"
          className="infoCenter__heading infoCenter__heading__sub"
        >
          How can we solve your problems?
        </h1>
        <br />
        <div className="flexkerne" data-aos="fade-down">
          <div className="center">
            <img
              data-aos="flip-right"
              className="mini__image"
              src={writeimg}
            ></img>
          </div>
          <br />
          <div className="second">
            <p className="para4">
              We at KWT offer the following solutions for your concerns with the
              following Core Expertise:
            </p>
            <ul className="info-ul">
              <li className="info-li">Brackish water Desalination</li>
              <li className="info-li">Reverse Osmosis</li>
              <li className="info-li">Multi Effect Distillation</li>
              <li className="info-li">Membrane Bio Reactor</li>
              <li className="info-li">Dissolved Air Flotation</li>
              <li className="info-li">Submerged Air Flotation</li>
              <li className="info-li">Sequential Batch Reactor</li>
              <li className="info-li">Ultra Filtration Recreation</li>
              <li className="info-li">Grey Water Treatment</li>

              <li className="info-li">Pools, Jacuzzi,Water Parks etc.</li>
            </ul>
          </div>
        </div>

        <div className="flexkerne" data-aos="fade-down">
          <div className="center2">
            <img
              data-aos="flip-right"
              className="mini__image"
              src={plantimg}
            ></img>
          </div>
          <br />
          <div className="second">
            <p className="para4">
              At KWT, we couple our Core Expertise with the following Services:
            </p>
            <ul className="info-ul">
              <li className="info-li">Water Quality Assessment</li>
              <li className="info-li">Budget Proposals</li>
              <li className="info-li">System Concept & Design</li>
              <li className="info-li">System Manufacturing</li>
              <li className="info-li">Installation &Commissioning</li>
              <li className="info-li">Repair & Maintenance</li>
              <li className="info-li">Modification & Upgrades</li>
              <li className="info-li">Consumables & Spare Parts</li>
              <li className="info-li">Drilling & Boring Works</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCenter;
