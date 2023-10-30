import React from "react";

const KeywordAndIcon = ({ wordMeaning, meanings }) => {
  return (
    <>
      {wordMeaning && (
        <div className="keyword--and--icon">
          <div className="firstSecText">
            <p className="first--sec--p--one"> {wordMeaning.word} </p>
            <p className="first--sec--p--two">
              {wordMeaning && wordMeaning.phonetic}
            </p>
          </div>
          <i className="ri-volume-up-line first--sec--icon"></i>
        </div>
      )}
    </>
  );
};

export default KeywordAndIcon;
