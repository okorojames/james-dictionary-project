import React from 'react'

const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <div className='my--dictionary--footer'>
      <p className="developer">developed by: <a href="https://okorojames.netlify.app" className="dev--link">JamexTech</a></p>
      <p className="copyright">copyright || &copy; { Year }</p>
    </div>
  )
}

export default Footer