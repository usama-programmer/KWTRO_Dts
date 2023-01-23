import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./youtubeSection.css";
// import { Box } from "@mui/system";
import wave from "../../assets/images/wave.png";
import Aos from "aos";
import "aos/dist/aos.css";

const YoutubeSection = ({ embedId }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="Youtube__main__container">
        <div className="Youtube__container">
          <h1
            className="Yotube_main_heading"
            data-aos="fade-down"
            data-aos-duration="2000"
            style={{ color: "#002c8f" }}
          >
            About KWTRO
          </h1>
          <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
        </div>
        <div className="youtube__section__child__divs" data-aos="fade-right">
          <div className="youtube__section__text">
            <p style={{ color: "white", lineHeight: "1.75" }}>
              We work directly with top brands, global specialists and
              innovative technologies to find the right solution for each and
              every project. From remote industry to humanitarian aid, we have
              the experience and know-how to get your project done right.
            </p>
            <br />
          </div>
          <div
            className="video-responsive"
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <iframe
              className="chacha"
              width="100%"
              height="80%"
              src={`https://www.youtube.com/embed/${(embedId = "q0aJ95jKv3c")}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
    </>
  );
};

YoutubeSection.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeSection;
