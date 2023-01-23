import React, { useEffect } from "react";
import { Collapse } from "antd";
import "./infoCenter.css";
import wave from "../../assets/images/wave.png";
import Aos from "aos";
import "aos/dist/aos.css";

const { Panel } = Collapse;

const InfoCenter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const genExtre = (name) => (
    <span style={{ color: "#079ED3", fontWeight: "bold" }}>{name}</span>
  );
  return (
    <>
      <div className="infocenter__container">
        <h1
          className="infocenter_main_heading"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Information Center
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
          // onChange={bydefault}
          style={{ margin: "20px auto 0px auto", width: "100%" }}
        >
          <Panel
            // style={{ color: "red" }}
            className="collapse-heading"
            header={genExtre("Global Issues")}
            key="1"
          >
            <p>
              <ul>
                <li>
                  <a className="collapse-href" href="">
                    Indonesia, Jakarta: struggling to provide clean water to all
                  </a>
                </li>
                <li>
                  <a className="collapse-href" href="">
                    China: facing up to groundwater crisis
                  </a>
                </li>
                <li>
                  <a className="collapse-href" href="">
                    Pakistan: United States announces Signature Water Program
                  </a>
                </li>
                <li>
                  <a className="collapse-href" href="">
                    Loss of Biodiversity and Extinctionsl
                  </a>
                </li>
                <li>
                  <a className="collapse-href" href="">
                    ‘Missing Heat’ will Eventually Show Itself
                  </a>
                </li>
                <li>
                  <a className="collapse-href" href="">
                    Water ‘key to ending Africa’s poverty
                  </a>
                </li>
              </ul>
            </p>
          </Panel>
          <Panel header={genExtre("Our Visions and Values")} key="2">
            <p>
              Having been in the field for 20 years KWT has always strived to
              achieve the pinnacle, realistically. We have always anticipated
              market trends and understood the dynamics of water treatment
              requirements and changes, which have helped us, stay ahead of out
              game. With a accumulate increase in our staff strength, office
              space and range of service and product provision, we strive to
              reach the 100% mark rapidly and swiftly.
              <br />
              <br />
              We vision the future of KWT, working hand in hand with some of the
              water treatment moguls around the world. We strive to have a
              larger, more technically sound work force, equipped to solve a
              larger array of water treatment techniques. This would not only
              mean venturing into more varied water treatment methods than we
              currently are, but to also actively involve in the look out for
              newer, more better treatment methods. Along with this, we always
              have and will continue to largely support environmentally friendly
              policies and procedures. Be it energy recovery systems (ERI) or
              water recycling systems etc, we are always supporting the most
              environmentally viable solutions.
              <br />
              <br />
              We have dedicated our entire efforts for the pure satisfaction of
              our end users, our clients. We endeavor ever trick in our hat, to
              provide customers with on time deliveries, high quality products
              and after sales services. Having taken this into consideration we
              strives to maintain the same level and quality of work procedures
              no matter where we supply our products, in an aim to uphold our
              customer’s strength and expectations. This has come naturally, in
              an aim to target much larger markets outside the Middle East. We
              are continually expanding our external operations and aim to
              double this milestone in the near future. Externally our focus
              remains on time, quality and competitive advantage, where as
              internally we believe in team work, joint solution construction
              and getting it right the first time. Hence our mission statement
              reads:
            </p>
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              “Striving to provide the most proficient water treatment
              solutions, with the most modernized facilities, procedures and
              personnel, through our every growing strength, efforts and
              dimension”.
            </p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default InfoCenter;
