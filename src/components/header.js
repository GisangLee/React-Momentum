import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import Weather from "./weather/weather";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__col">
        <div>
          <span>Link</span>
        </div>
      </div>
      <div className="header__col">
        <div>
          <FontAwesomeIcon
            icon={faThermometerHalf}
            className="header__icon"
          ></FontAwesomeIcon>
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default Header;
