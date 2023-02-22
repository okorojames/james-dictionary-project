import React from 'react'

const Header = () => {
  return (
    <header>
      <i className="ri-book-2-line header-icon"></i>
      {/* font and mode */}
      <div className="fontMode">
        {/* font */}
        <div className="font"><div className="fontName">serif</div><i className="fa-solid fa-chevron-down"></i></div>
        {/* mode */}
      <span className="headerSpace" style={{color: '#9ca3af'}}>|</span>
      <div className="modeToggle">
        <div className="mode"><div className="modeCircle"></div></div>
        <div className="modeIcon">
          <i className="ri-moon-fill darkMode"></i>
          <i className="ri-sun-line lightMode"></i>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header