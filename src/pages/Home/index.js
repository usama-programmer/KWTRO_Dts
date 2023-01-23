import React from "react";
import {
  AboutSection,
  Cards,
  InfoCenter,
  LogoSlider,
  ServiceSolution,
  YoutubeSection,
} from "../../component";

const Home = () => {
  return (
    <>
      <ServiceSolution />
      <Cards />
      <LogoSlider />
      <AboutSection />
      <YoutubeSection />
      <InfoCenter />
    </>
  );
};

export default Home;
