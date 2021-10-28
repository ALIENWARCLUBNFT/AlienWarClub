import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="/#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="/#why">About AWC?</a>
        </li>
        <li>
          <a href="/#faq">F.A.Qs</a>
        </li>
        <li>{/* <Link to="#0">Support</Link> */}</li>
      </ul>
    </nav>
  );
};

export default FooterNav;
