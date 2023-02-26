import React from 'react'

const FirstSection = ({wordMeaning}) => {
  return (
    <div className='firstSectionContainer'>
      <div className="keyword--and--icon">
        <div className="firstSecText">
        <p className="first--sec--p--one">{'input value'}</p>
        <p className="first--sec--p--two">{'/ value translate /'}</p>
      </div>
      <i className="ri-volume-up-line first--sec--icon"></i>
      </div>
      {/*  */}
      <div className="NounsAndVerbs">
        {/*  */}
        <div className='noun--section--container'>
      <span className="noun--and--line">
        <p className='noun'>noun</p>
        <p className="line"></p>
      </span>
      {/*  */}
      {/*  */}
      <div className="meanings">
        <p className="meaning">Meaning</p>
        <span className="sentences--lines">
          <i className="ri-checkbox-blank-circle-fill meaning--icon"></i>
          <p className="meaning--and-sentences">
            <span className="meaning--one">{'This is meaning one'}</span><br />
            <span className="sentence-line">{'" This is a sentence wiht the meaning above. "'}</span>
          </p>
        </span>
      </div>
        </div>
        {/*  */}
         <div className='verbs--section--container'>
      <span className="noun--and--line">
        <p className='verb'>Verbs</p>
        <p className="line"></p>
      </span>
      {/*  */}
      {/*  */}
      <div className="meanings">
        <p className="meaning">Meaning</p>
        <span className="sentences--lines">
          <i className="ri-checkbox-blank-circle-fill meaning--icon"></i>
          <p className="meaning--and-sentences">
            <span className="meaning--one">{'This is meaning one'}</span><br />
            <span className="sentence-line">{'" This is a sentence wiht the meaning above. "'}</span>
          </p>
        </span>
      </div>
    </div>
      </div>
    </div>
  )
}

export default FirstSection