import React from "react";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

import "./Header.css";

import { Link } from "react-scroll";
import { useState } from "react";

const Header = ({ items }) => {
  const mobile = window.innerWidth <= 768;
  const [bars, setBars] = useState(false);

  return (
    <div className="head">
      <img src={logo} alt="" />
      {bars === false && mobile === true ? (
        <div onClick={() => setBars(true)}>
          <img src={Bars} alt="" />
        </div>
      ) : (
        <ul className="nav">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={item.name}
                span={true}
                smooth={true}
                onClick={() => setBars(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
