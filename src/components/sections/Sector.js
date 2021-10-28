import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
// import step_img_1 from "./../../assets/images/Team 1.png";


const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Sector = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  //   const [videoModalActive, setVideomodalactive] = useState(false);

  //   const openModal = (e) => {
  //     e.preventDefault();
  //     setVideomodalactive(true);
  //   };

  //   const closeModal = (e) => {
  //     e.preventDefault();
  //     setVideomodalactive(false);
  //   };

  const outerClasses = classNames(
    " section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    " section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section
      {...props}
      className={`${outerClasses} sector-special`}
      
    >
      {/* <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            
            <div className="">
              <p
                className="m-0  reveal-from-bottom section-text"
                data-reveal-delay="400"
               
              >
                
              </p>
              <br></br>
              <hr></hr>
              <h2></h2>

              <div className="cta-team">
            <div className="cta-mb">
              <div style={{ width: "200px" }}>
                  <div style={{ textAlign: "center", color: "black" }}>
                  <span style={{ color: "white" }}></span>
                  <p></p>
                </div>
              </div>
            </div>
          
          </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

Sector.propTypes = propTypes;
Sector.defaultProps = defaultProps;

export default Sector;
