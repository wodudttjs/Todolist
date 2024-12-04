import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <i className="fa fa-calendar"></i> SelfGrowthApp
      </div>
      <button className="add-button">
        <i className="fa fa-plus"></i>
      </button>
    </header>
  );
}

export default Header;
