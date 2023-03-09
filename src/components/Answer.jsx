import React from "react";

const Answer = ({ wordMeaning }) => {
  const { meanings } = wordMeaning;
  return (
    <div className="firstSectionContainer">
      <div className="keyword--and--icon">
        <div className="firstSecText">
          <p className="first--sec--p--one"> {wordMeaning.word} </p>
          <p className="first--sec--p--two">
            {wordMeaning && wordMeaning.phonetic}
          </p>
        </div>
        <i className="ri-volume-up-line first--sec--icon"></i>
      </div>
      <div className="NounsAndVerbs">
        {wordMeaning.meanings &&
          meanings.map((meaning) => (
            <div
              className="noun--section--container"
              key={meaning.partOfSpeech}
            >
              <span className="noun--and--line">
                <p className="noun">{meaning.partOfSpeech}</p>
                <p className="line"></p>
              </span>
              <div className="meanings">
                <p className="meaning">Meaning</p>
                {/* meaning definition */}
                {meaning.definitions.map((definition) => (
                  <div className="meanings">
                    <span className="sentences--lines">
                      <i className="ri-checkbox-blank-circle-fill meaning--icon"></i>
                      <p className="meaning--and-sentences">
                        <span className="meaning--one">
                          {definition.definition}
                        </span>
                        <br />
                        <span className="sentence-line">
                          {definition.example}
                        </span>
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      {/*  */}
      {wordMeaning.meanings &&
        meanings.map((meaning) => (
          <div className="synonyms">
            <p
              style={{
                letterSpacing: "1.4px",
                fontWeight: "700",
                color: "#2e3642",
                marginBottom: "8px",
              }}
            >
              SYNONYMS
            </p>
            {meaning.synonyms.length > 0 &&
              meaning.synonyms.map((synonym) => (
                <p
                  style={{
                    color: "#ae64fd",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  {synonym}
                </p>
              ))}
          </div>
        ))}
      {/* Antonymns */}
      {wordMeaning.meanings &&
        meanings.map((meaning) => (
          <div className="antonyms">
            <p
              style={{
                letterSpacing: "1.4px",
                fontWeight: "700",
                color: "#2e3642",
                marginBottom: "8px",
              }}
            >
              ATONYMS
            </p>
            {meaning.antonyms.length > 0 &&
              meaning.antonyms.map((antonym) => (
                <p
                  style={{
                    color: "#ae64fd",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  {antonym}
                </p>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Answer;
