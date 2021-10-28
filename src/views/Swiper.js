// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// // import { useKeenSlider } from "keen-slider/react"
// // import "keen-slider/keen-slider.esm";
// import Image from "../components/elements/Image";
// import "./slider.css";
// // import nokMe from "../assets/images/525 x 528 ii.png";
// // import nokYou from "../assets/images/525 x 528 iii.png";
// // import nokWe from "../assets/images/525 x 528 iv.png";
// // import nokI from "../assets/images/525 x 528 v.png";
// // import nokia from "../assets/images/525 x 528 vi.png";
// // import noktune from "../assets/images/525 x 528.png";


// import nokMe from "../assets/images/slider/New2.png";
// import nokYou from "../assets/images/slider/New3.png";
// import nokWe from "../assets/images/slider/New4.png";
// import nokI from "../assets/images/slider/New6.png";
// import nokia from "../assets/images/slider/New1.png";
// import noktune from "../assets/images/slider/New7.png";

// export default (props) => {
//   // const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 });

//   const [pause, setPause] = React.useState(false);
//   const timer = React.useRef();
//   const [sliderRef, slider] = useKeenSlider({
//     loop: true,
//     duration: 1000,

//     dragStart: () => {
//       setPause(true);
//     },
//     dragEnd: () => {
//       setPause(false);
//     },
//     slidesPerView: 1,
//     spacing: 15,
//     breakpoints: {
//       "(min-width: 450px)": {
//         slidesPerView: 2,
//         mode: "free-snap",
//       },
//       "(min-width: 700px)": {
//         slidesPerView: 3,
//         mode: "free-snap",
//       },
//       "(min-width: 1200px)": {
//         slidesPerView: 3,
//         mode: "free-snap",
//       },
//     },
//   });

//   React.useEffect(() => {
//     sliderRef.current.addEventListener("mouseover", () => {
//       setPause(true);
//     });
//     sliderRef.current.addEventListener("mouseout", () => {
//       setPause(false);
//     });
//   }, [sliderRef]);

//   React.useEffect(() => {
//     timer.current = setInterval(() => {
//       if (!pause && slider) {
//         slider.next();
//       }
//     }, 2000);
//     return () => {
//       clearInterval(timer.current);
//     };
//   }, [pause, slider]);

//   return (
//     <div ref={sliderRef} className="keen-slider">
//       <div className="keen-slider__slide number-slide1">
//         <Image
//           className="has-shadow"
//           src={nokMe}
//           alt="Hero"
//           width={300}
//           height={204}
//         />
//       </div>
//       <div className="keen-slider__slide number-slide2">
//         <Image
//           className="has-shadow"
//           src={nokia}
//           alt="Hero"
//           width={300}
//           height={204}
//         />
//       </div>
//       <div className="keen-slider__slide number-slide3">
//         <Image
//           className="has-shadow"
//           src={nokWe}
//           alt="Hero"
//           width={300}
//           height={204}
//         />
//       </div>
//       <div className="keen-slider__slide number-slide4">
//         <Image
//           className="has-shadow"
//           src={nokI}
//           alt="Hero"
//           width={300}
//           height={204}
//         />
//       </div>
//       <div className="keen-slider__slide number-slide5">
//         <Image
//           className="has-shadow"
//           src={nokYou}
//           alt="Hero"
//           width={300}
//           height={204}
//         />
//       </div>
//       <div className="keen-slider__slide number-slide6">
//         <Image
//           className="has-shadow"
//           src={noktune}
//           alt="Hero"
//           width={300}
//           height={204}
//         />
//       </div>
//     </div>
//   );
// };
