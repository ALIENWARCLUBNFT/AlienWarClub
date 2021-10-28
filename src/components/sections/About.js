import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import ButtonGroup from "../elements/ButtonGroup";
// import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
// import video from "./../../assets/images/video-placeholder.jpg";
// import { Demo } from "../../Demo";
import Appdemo from "../../Appdemo";
import gif from "../../assets/images/AWC.gif"
import icon from "../../assets/images/icon.svg"




const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const About = ({
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
    "about section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "about-inner ",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className=" about-wrapper">
        <div className={`${innerClasses} about-special`}>
          <div className="about-content styled__text">
            <h2 className="m-0  reveal-from-bottom" data-reveal-delay="400" style={{textAlign:"left"}}>
            Welcome to ALIEN WAR CLUB
            </h2>
            <br></br>
            <p   data-reveal-delay="100"
              data-aos="fade-down"
              style={{fontFamily:"raleway", textAlign:"justify"}}
              className="about_content"
              >
        The Alien War Club is a 5,999 generative NFT collection of Alien warriors situated on the Solana Blockchain. Be the Commander of an Alien Warrior by owning it's NFT on a Solana based wallet. Doing so will grant you an early access to our upcoming Play-To-Earn gaming platform, native utility token airdrop and high NFT staking reward.
<br/>
<br/>

Alien War Club is the first Play-To-Earn, Hold-To-Earn and Stake-To-Earn all inclusive NFT Platform built on the Solana Blockchain.

<br/>
<br/>
Our mission is to bring game enthusiasts from all solana communities and pay them while they have fun playing games
            </p>
            <br/>
                {/* <Appdemo /> */}
                {/* <a href="https://discord.gg/8pZwjFVF">JOIN US</a> */}
                <a href="https://discord.gg/alienwarclub" class="button-mint button-primary button-wide-mobile button-lg" target="_blank">MINTING HAS NOT STARTED <br/> JOIN DISCORD <img src={icon} style={{height:"20px", display:"inline", verticalAlign:"middle"}}></img></a>
            
          </div>
         
         
        </div>
        <div className="about-image">
        <img className="about-gif" src={gif} alt="img" />
             
             
             </div>
      </div>
      <hr></hr>
    </section>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
