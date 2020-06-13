import React from "react";
import FontAwesome from "react-fontawesome";
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
          <FontAwesome
            name="thermometer-full"
            className="header__icon"
          ></FontAwesome>
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default Header;
