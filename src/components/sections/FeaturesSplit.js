import React from "react";

import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

// import step_img_1 from "./../../assets/images/icons/01.png";
// import step_img_2 from "./../../assets/images/icons/02.png";
// import step_img_3 from "./../../assets/images/icons/03.png";
// import step_img_4 from "./../../assets/images/icons/05.png";
// import step_img_5 from "./../../assets/images/icons/05.png";
// import step_img_6 from "./../../assets/images/icons/06.png";
import Aos from "aos";
import "aos/dist/aos.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "RoadMap",
    // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={`${outerClasses} feature-special`}
      id="roadmap"
    >
      {/* <div className="container"> */}
      {/* <div className={innerClasses}> */}

      {/* <div className={splitClasses}> */}
      <div className=" strategy-section">
        <SectionHeader data={sectionHeader}  className="center-content styled__text" />
        <div className="strategy-wrapper" >
          <div className="strategy-bar" style={{position:"absolute", height:"83%", width:"10px",background:"white", left:"50%"}}></div>
          <div className="strategy-container effect5">
            <div
              className="step-content "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="strategy-content">
                <h5 className="strategy-hero" >PHASE 1</h5>
                <div className="">
                  <h1 className="strategy-title left">
                  Design and Generation 
                  </h1>
                  <p>
                  The AWC NFT characters were carefully drawn and crafted with hand and given different attributes.


                  </p>
                </div>


              </div>
            </div>
            
           
          </div>
          <div className="strategy-container strategy-container-alt effect5">
            <div
              className="step-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="strategy-content">
              <h5 className="strategy-hero" >PHASE 2</h5>
                
                <div className="">
                  <h1 className="strategy-title left">
Minting and Ownership
                    
                  </h1>
                  <p>
                  The Alien warriors found armor in the supervision of their respective captain who will retain ownership of them through the minting event.

                  </p>
                </div>


              </div>
            </div>         
          </div>
          <div className="strategy-container effect5">
            <div
              className="step-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="strategy-content">
              <h5 className="strategy-hero" >PHASE 3</h5>
                
                <div className="">
                  <h1 className=" strategy-title left">
                  Trading and Value Generation

              </h1>
                  <p>
                 
The AWC NFT collection will be listed on an NFT Marketplace decided by the community and holders will generate value for their AWC NFT by actively trading them.

    
                  </p>
                </div>


              </div>
            </div>
            
           
          </div>
          <div className="strategy-container strategy-container-alt effect5">
            <div
              className="step-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="strategy-content">
              <h5 className="strategy-hero" >PHASE 4</h5>
                
                <div className="">
                  <h1 className="strategy-title left">
             

Token Deployment, Listing and Airdrop

                  </h1>
                  <p>
Our native utility token "$ALIEN" will be deployed on mainnet, listed on a decentralized exchange and airdropped to all Alien War Club NFT holders.

               
                  </p>
                </div>


              </div>
            </div>         
          </div>
          <div className="strategy-container effect5">
            <div
              className="step-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="strategy-content">
                <h5 >PHASE 5</h5>
                <div className="">
                  <h1 className="strategy-title left">
                  NFT Staking Platform and Play-To-Earn 
  
                  </h1>
                  <p>
                  The NFT staking and Play-To-Earn gaming features will be integrated into our NFT project with priority access given to Alien War Club NFT holders.

                  </p>
                </div>


              </div>
            </div>
            
           
          </div>
         
        </div>
      </div>
     
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
