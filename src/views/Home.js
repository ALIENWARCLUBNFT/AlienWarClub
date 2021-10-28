import React from "react";

import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import About from "../components/sections/About";

// import Cta from "../components/sections/Cta";
import Sector from "../components/sections/Sector";
import FaqC from "../components/sections/Faq"




const HomeViews = () => {
  // (async () => {
  //   // Connect to cluster
  //   var connection = new web3.Connection(
  //     web3.clusterApiUrl("devnet"),
  //     'confirmed',
  //   );
  // })

  return (
    <>
      <Hero className="illustration-section-01" />
      <About/>
      {/* <SwiperCon /> */}
      <FeaturesTiles />
      {/* <Slider /> */}
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <FaqC/>
      <Sector className="illustration-section-01" />
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
};

export default HomeViews;
