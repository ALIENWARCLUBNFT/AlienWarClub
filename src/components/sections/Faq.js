import React from "react";
// import sections
// import SectorHero from "../components/sections/SectorHero";
import Faq from "react-faq-component";

const FaqC = () => {
  const data = {
    title: "F.A.Qs",
    rows: [
      {
        title: "What is Alienwarclub",
        content:
          "AWC is a Unique NFT collection of Alien warriors with Play-To-Earn, Stake-To-Earn and Hold-To-Earn features powered by the Solana Blockchain.",
      },
      {
        title: "WILL THERE BE NFT SALE?",
        content:
          " Of course we have 5999 Aliens available for minting",
      },
     
      
      
      {
        title: "WHEN IS MINT",
        content:
      "Mint date will be announced at a later date. Right now, building the community is paramount to us. ",
      },
      {
        title: " WHY CHOOSE ALIENWARCLUB",
        content:
          "AlienWarClub is the first community project that gives our NFT holders priority access to our Play-to-Earn gaming where they get to earn $ALIEN just for playing, staking and holding the AWC NFT. 0.5%  of the royalty fees goes to holders and collaborations with other top priority project qualifies you for an airdrop in their native token.  ",
         


      },
      {
        title: " WHAT IS THE MINT PRICE",
        content:
          "The mint price will be announced later.",
      },
     
 
      {
        title: "HOW MANY NFTS CAN ONE MINT PER WALLLET",
        content:
          "This is yet to be decided but we are sure going to make it fair for everyone. ",
      },
      


      {
        title: "WHAT WALLET SHOULD I USE",
        content:
          "All wallets will be available, it depends on what works best for you, however Sollet, Solflare and phantom will do.   ",
      },
      

      {
        title: "HOW DO I MINT",
        content:
          "On mint day, link will be provided on our announcement channel and the procedure to mint will be provided.           ",
      },
      


      {
        title: "WHAT NETWORK/BLOCKCHAIN IS THE NFT ON",
        content:
          "Our NFTs will only exist on the Solana Blockchain.",
      },
      


      {
        title: " IS THERE ANY UTILITY?",
        content:
          "Our project has a lot to offer starting with Our gaming platform which will be launched soon, down to our token which will be released at a later announced date, we plan on airdroping all our NFT holders, we are introducing single sided staking where you can stake our NFT to earn $ALIEN token, Stake ALIEN to earn more $ALIEN, also earn $ALIEN for playing games on our gaming platform           ",
      },
     
      
      
      {
        title: "WILL THERE BE AIRDROP?",
        content:
          "Yes our community will collaborate with other projects to give out some of our NFTs when it’s release.   ",
      },
      {
        title: "How Does Rarity System Works?",
        content:
          "The Rarity sheet will be realised prior to minting",
      },
      

      
    ],
  };

  








  return (
    <section id="faq">
      {/* <SectorHero className="illustration-section-01" /> */}
      <Faq classname="faq styled__text" data={data} style={{background:"purple"}}/>
    </section>
  );
};

export default FaqC;
