import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import { gsap} from "gsap";

import Image from "../elements/Image";
import Modal from "../elements/Modal";

import Appdemo from "../../Appdemo";
// import GIF from "./../../assets/images/NOKs.gif";


const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  // /** SVG JS TWEEN MAX */
  // const el = useRef();
  // const q = gsap.utils.selector(el);
  

  // wait until DOM has been rendered
  // useEffect(() => {
  //   var radius = 8;
  //   // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
  //   gsap.to(q(".blob"), {
  //     x: 100,
  //     stagger: 0.33,
  //     repeat: -1,
  //     repeatDelay: 1,
  //     yoyo: true
  //   });
  // }, []);




  
  return (
    <section {...props} className={outerClasses } style={{
      overflow: "hidden"}}>
      <div className="container-sm">
        <div className={`${innerClasses} hero-special`}>
          <div className="hero-content">
            {/* <h2 className="m-0  reveal-from-bottom"   data-reveal-delay="100"
              data-aos="fade-down">
              
            </h2> */}
            <br></br>
            <div className="hero-item hero-absolute">
        {/* <img src={} alt="img" /> */}
             
             
             </div>
          
            <div className="container-xs">
 
              <div className="reveal-from-bottom" data-reveal-delay="600">
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
