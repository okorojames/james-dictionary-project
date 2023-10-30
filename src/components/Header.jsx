import React, { useEffect } from "react";
import { useRef } from "react";
import HeaderFonts from "./HeaderFonts";

const Header = () => {
  const modeCircle = useRef();
  const lightMode = useRef();
  const darkMode = useRef();
  function modeToggle() {
    modeCircle.current.classList.toggle("modeToggle");
    document.body.classList.toggle("modeColor");
    lightMode.current.classList.toggle("iconToggle");
    darkMode.current.classList.toggle("iconToggle2");
  }
  return (
    <header>
      <i className="ri-book-2-line header-icon"></i>
      {/* font and mode */}
      <div className="fontMode">
        {/* font */}
        <HeaderFonts />
        {/* mode */}
        <span className="headerSpace" style={{ color: "#9ca3af" }}>
          |
        </span>
        <div className="modeToggle">
          <div className="mode" onClick={modeToggle}>
            <div className="modeCircle" ref={modeCircle}></div>
          </div>
          <div className="modeIcon">
            <i className="ri-moon-fill mode-icon darkMode" ref={darkMode}></i>
            <i className="ri-sun-line mode-icon lightMode" ref={lightMode}></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
