import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
// import logo from "./../../../assets/images/logo-2.png";
import logo from "./../../../assets/images/AWC.png";


const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes} >
      <h1 className="m-0">
        <Link to="/">
          <Image src={logo} alt="Open" width={100} height={100} />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;