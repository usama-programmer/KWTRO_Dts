import React, { useEffect } from "react";
import { Collapse } from "antd";
import "./about.css";
import Imagea from "../../assets/images/c1.jpg";
import Imageb from "../../assets/images/c2.jpg";
import Imagec from "../../assets/images/c3.jpg";
import Imaged from "../../assets/images/c4.jpg";
import Imagee from "../../assets/images/c5.jpg";
import Imagef from "../../assets/images/c6.jpg";
import Imageg from "../../assets/images/c7.jpg";
import Imageh from "../../assets/images/c8.jpg";
import Imagei from "../../assets/images/c9.jpg";
import Imagej from "../../assets/images/c10.jpg";
import Imagek from "../../assets/images/c11.jpg";
import wave from "../../assets/images/wave.png";
import Aos from "aos";
import "aos/dist/aos.css";
const { Panel } = Collapse;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const genExtra = (name) => (
    <span style={{ color: "#079ED3", fontWeight: "bold" }}>{name} </span>
  );
  return (
    <>
      <div className="about__container__page">
        <h1
          className="about_main_heading"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          About Us
        </h1>
        <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Collapse
          accordion={true} //open one collapse at a time.
          className="fix"
          defaultActiveKey={["1"]} // open collapse by defaul throgh key.
          style={{ margin: "20px auto 20px auto", width: "100%" }}
        >
          <Panel header={genExtra("History")} key="1">
            <p>
              KWT has pioneered the Total Water Management concept in this part
              of the world. Established in the late 80’s, KWT has now become the
              one-stop solution to address all needs on the water treatment
              front. KWT Water Treatment chemicals evolved as a dream……..a dream
              to be recognized as the most trusted name in providing solutions
              in treating and conserving a very precious commodity – WATER.
              Conceived in 1990, KWT has grown in line with it’s dream and
              today, is considered the one-stop solution in water treatment in
              the U.A.E. Diversifying into Process chemicals to cater to the
              challenging Refinery, Petrochemicals and Lubricants industrial
              sector, has rendered KWT the all-round strength to function as a
              single-source vendor for water treatment and process chemicals
              specific to that sector. KWT specializes in offering a TEAM
              approach to it’s customers becoming one with their needs in
              optimizing plant economics for chemicals and utilities. Total
              Water Management is one another important area competently offered
              by KWT.
            </p>
          </Panel>
          <Panel header={genExtra("Advantages")} key="2">
            <p>
              Water Bird will utilize a ” Team Approach ” in servicing.. We feel
              strongly that the team concept will provide you with greater value
              for your water treatment and process chemical treatment cost.
              Using this approach, we would be able to react more quickly and
              have coverage during vacations, holidays and offer company
              training sessions. The Water Bird corporate engineering staffs
              provide additional technical support. The customized service
              program is broken down into services for each key subsystem and
              non-routine services that are available if required. All of these
              services will be provided at no additional cost but only with the
              assurance of a long-term contract.
              <h1 className="hee">Pre-Start-Up / Pre-Commissioning Services</h1>
              <br />
              <ul>
                <li>
                  Review piping and instrument drawings and offer
                  recommendations.
                </li>
                <li>
                  Review pretreatment equipment with subsequent recommendations.
                </li>
                <li>Review/recommend chemical feed systems</li>
                <li>Review chemical feed control apparatus</li>
                <li>Interface with equipment vendors where necessary.</li>
                <li>Review equipment technical manuals</li>
                <li>
                  Develop an operator training manual for the chemical systems
                </li>
                <li>
                  Conduct operator-training sessions on water and process
                  chemical treatment.
                </li>
                <li>
                  Develop preliminary cost estimates for all water and process
                  treatment programme
                </li>
                <li>
                  Recommend monitoring methods in order to establish system
                  conditions during start-up as well as routine operation.
                </li>
                <li>
                  Provide recommendations for analytical equipments and
                  procedures.
                </li>
                <li>
                  Provide chemical treatment program recommendations and
                  operating chemistry guidelines.
                </li>
                <li>
                  Assist in developing an environmentally rational treatment
                  programme.
                </li>
                <li>
                  Provide recommendations for out-of-service protection of
                  equipment.
                </li>
              </ul>
              <br />
              <h1 className="hee">Administrative</h1>
              <br />
              <ul>
                <li>
                  Regular visits to site for lab and field testing of all
                  relevant parameters.
                </li>
                <li>Site visits otherwise on need basis.</li>
                <li>Periodic reviews and reports</li>
                <li>Stock inventory advise</li>
                <li>Training of operating personnel</li>
                <li>Technical inputs on case-to-case basis.</li>
                <li>Chemical delivery at short notice</li>
                <li>Supervision during initial dosing of chemicals</li>
              </ul>
              <h1 className="hee">Technical</h1>
              <br />
              <ul>
                <li>Corrosion and fouling studies</li>
                <li>
                  Scale & corrosion free system / equipment internals during
                  inspection at any given time
                </li>
                <li>
                  No drop in heat transfer rates due to scaling or fouling
                </li>
                <li>
                  Reduction in downtimes on account of treatment related
                  problems.
                </li>
                <li>Troubleshooting assistance.</li>
                <li>Regular site upgradation proposals.</li>
                <li>
                  Continuous endeavour towards economizing treatment costs.
                </li>
              </ul>
            </p>
          </Panel>
          <Panel header={genExtra("Our Principals")} key="3">
            <p>
              <span style={{ fontWeight: "bold" }}>ProMinent </span>
              is the reliable solutions partner for water treatment and a
              manufacturer of components and systems for chemical fluid
              handling.
              <ol>
                <br />
                <li>Chemical dosing pumps.</li>
                <li>R.O Plants.</li>
                <li>Ozone generators.</li>
                <li>Storage tanks.</li>
                <li>Automatic chemical feed systems.</li>
                <li>Controllers.</li>
                <li>Probes/Sensors etc.</li>
              </ol>
              <br />
              <span style={{ fontWeight: "bold" }}>Avista technologies </span>
              is devoted exclusively to the supply of speciality chemicals and
              technical support services for the membrane seperation industry
              speicfically Reverse osmosis and nanofilteration. Their products
              and services are designed to prevent ,reduce or treat the fouling
              that occurs within these systems.
              <ol>
                <br />
                <li>R.O related chemicals.</li>
                <li>Anti-foulants.</li>
                <li>Anti-scalants.</li>
                <li>Biocides.</li>
              </ol>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Rochester Midland Corporation{" "}
              </span>
              (RMC) is a global company that provides a broad range of programs
              that deliver sustainable solutions for health, productivity and
              the environment. Rochester Midland is a specialty chemical company
              with marketing divisions in water treatment, food process
              chemistry, washroom sanitation industrial cleaners, institutional
              products and feminine hygiene vended products.
              <ol>
                <br />
                <li>Speciality chemicals.</li>
                <li>Industrial water treatment chemicals.</li>
                <li>De-soiling chemicals, etc.</li>
                <li>De-greasers.</li>
                <li>Paint strippers.</li>
                <li>Rust inhibitors</li>
              </ol>
            </p>
          </Panel>
          <Panel header={genExtra("Our Clients")} key="4">
            <div className="wrapper" style={{ padding: "5px" }}>
              <img className="col-image" src={Imagea} />
              <img className="col-image" src={Imageb} />
              <img className="col-image" src={Imagec} />
              <img className="col-image" src={Imaged} />
              <img className="col-image" src={Imagee} />
              <img className="col-image" src={Imagef} />
              <img className="col-image" src={Imageg} />
              <img className="col-image" src={Imageh} />
              <img className="col-image" src={Imagei} />
              <img className="col-image" src={Imagej} />
              <img className="col-image" src={Imagek} />
            </div>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};
export default About;
