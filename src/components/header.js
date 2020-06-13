import React from "react";
import FontAwesome from "react-fontawesome";

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
          <FontAwesome>
            <i class="fas fa-cloud"></i>
          </FontAwesome>
        </div>
      </div>
    </div>
  );
}

export default Header;
