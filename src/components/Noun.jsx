import React from 'react'

const noun = () => {
  return (
    <div className='noun--section--container'>
      <span className="noun--and--line">
        <p className='noun'>noun</p>
        <p className="line"></p>
      </span>
      {/*  */}
      {/*  */}
      <div className="meanings">
        <p className="meaning">Meaning</p>
        <p className="sentences--lines">
          <i className="ri-checkbox-blank-circle-fill meaning--icon"></i>
          <p className="meaning--and-sentences">
            <span className="meaning--one">{'This is meaning one'}</span><br />
            <span className="sentence-line">{'" This is a sentence wiht the meaning above. "'}</span>
          </p>
        </p>
      </div>
    </div>
  )
}

export default noun