import React from 'react'

const Answer = ({ wordMeaning }) => {
  const { meanings } = wordMeaning;
  return (
    <div className='firstSectionContainer'>
      <div className="keyword--and--icon">
        <div className="firstSecText">
        <p className="first--sec--p--one"> {wordMeaning.word} </p>
        <p className="first--sec--p--two">{wordMeaning && wordMeaning.phonetic}</p>
      </div>
      <i className="ri-volume-up-line first--sec--icon"></i>
      </div>
      <div className="NounsAndVerbs">
            {wordMeaning.meanings &&  meanings.map((meaning) => (
        <div className='noun--section--container' key={meaning.partOfSpeech}>
      <span className="noun--and--line">
        <p className='noun'>{meaning.partOfSpeech}</p>
        <p className="line"></p>
      </span>
      <div className="meanings">
        <p className="meaning">Meaning</p>
                  {meaning.definitions.map((definition) => (
      <div className="meanings">
        <span className="sentences--lines">
          <i className="ri-checkbox-blank-circle-fill meaning--icon"></i>
          <p className="meaning--and-sentences">
            <span className="meaning--one">{definition.definition}</span><br />
              <span className="sentence-line">{definition.example}</span>
          </p>
        </span>
      </div>
        ))}
      </div>
        </div>
            ))}

         
      </div>
    </div>
  )
}

export default Answer