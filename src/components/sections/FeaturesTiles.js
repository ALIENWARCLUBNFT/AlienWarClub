import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import featuretileone from "./../../assets/images/alien-anim-unscreen.gif";
import featuretileHold from "./../../assets/images/hold.svg";
// import featuretiletwo from "./../../assets/images/feature-tile-icon-02.svg";
// import featuretilethree from "./../../assets/images/feature-tile-icon-03.svg";




// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Features of AWC",
    // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section {...props} className={outerClasses} id="why">
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
      <div className="container" style={{"padding-top": "35px"}}>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content styled__text" />
          <div className={tilesClasses}>
            
         
             <div className="tiles-item reveal-from-bottom ">
              <div
                className="tiles-item-inner"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <div className="features-tiles-hold">

                  <Image
                      src={featuretileHold}
                      alt="Features tile icon 01"
                      width={45}
                      height={34}
                    />
                  </div>

                    <Image
                      src={featuretileone}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                    {/* <FontAwesomeIcon icon="fa-thin fa-gem" /> */}
                    {/* <i class="fa fa-diamond" aria-hidden="true"></i> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 feature-tiles-hero">
                  Hold To Earn 


                  </h4>
                  <p className="m-0 text-sm features-tiles-text">
Holders of AWC NFT will be airdropped the $ALIEN token which is the native utility token of Alien War Club Platform and give value to the ecosystem alongside our unique AWC NFT collection.
                  
                    </p>
                </div>
              </div>
            </div>
             <div className="tiles-item reveal-from-bottom ">
              <div
                className="tiles-item-inner"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderBottom:"16px solid white" , background: "#ab1d93"}}>
                    <div className="features-tiles-play">
                  
                    </div>
                    <Image
                      src={featuretileone}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                    {/* <FontAwesomeIcon icon="fa-thin fa-gem" /> */}
                    {/* <i class="fa fa-diamond" aria-hidden="true"></i> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 feature-tiles-hero">
Play-2-Earn

                  </h4>
                  <p className="m-0 text-sm features-tiles-text">
                  Summon your Alien to fight it out on the warfare and earn our native token when they become victorious. As AWC NFT holder, there are several ways to earn in the alienverse. More info to be released as regard this!
                  </p>
                </div>
              </div>
            </div>
             <div className="tiles-item reveal-from-bottom ">
              <div
                className="tiles-item-inner"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderBottom:"16px solid white",background: "#ab1d93;"}}>
                  <div className="features-tiles-stake">
                 
                  </div>
                    
                    <Image
                      src={featuretileone}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                    {/* <FontAwesomeIcon icon="fa-thin fa-gem" /> */}
                    {/* <i class="fa fa-diamond" aria-hidden="true"></i> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 feature-tiles-hero">

                  Stake To Earn


                  </h4>
                  <p className="m-0 text-sm features-tiles-text">
Get incentivized with $ALIEN for being an AWC NFT holders by staking your unique AWC NFT on our upcoming NFT staking platform.
                  
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
