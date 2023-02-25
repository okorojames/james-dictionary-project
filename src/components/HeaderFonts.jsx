import React from 'react'
import { useRef } from 'react'

const HeaderFonts = () => {
  const fontNameLists = useRef()
  function onClickFont() {
    fontNameLists.current.classList.toggle('fontToggle')
  }
  return (
    <div className='font' onClick={onClickFont}>
      <span className="fontName">
      {'serif'}
      <span className="fontNameLists" ref={fontNameLists}>
         <span className="fontNameList">Rubik</span>
         <span className="fontNameList">Poppins</span>
         <span className="fontNameList">Montserrat</span>
         <span className="fontNameList">Raleway</span>
      </span>
    </span><i className="fa-solid fa-chevron-down"></i></div>
  )
}

export default HeaderFonts