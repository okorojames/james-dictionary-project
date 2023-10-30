import React from "react";
import SynonymesAndAntonymes from "./SynonymesAndAntonymes";
import KeywordAndIcon from "./KeywordAndIcon";

const Answer = ({ wordMeaning }) => {
  const { meanings } = wordMeaning;
  return (
    <div className="firstSectionContainer">
      <KeywordAndIcon wordMeaning={wordMeaning} meanings={meanings} />
      <div className="NounsAndVerbs">
        {wordMeaning.meanings &&
          meanings.map((meaning, i) => (
            <div className="noun--section--container" key={i}>
              <span className="noun--and--line">
                <p className="noun">{meaning.partOfSpeech}</p>
                <p className="line"></p>
              </span>
              <div className="meanings">
                <p className="meaning">Meaning</p>
                {/* meaning definition */}
                {meaning.definitions.map((definition, i) => (
                  <div className="meanings" key={i}>
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
      <SynonymesAndAntonymes wordMeaning={wordMeaning} meanings={meanings} />
    </div>
  );
};

export default Answer;
