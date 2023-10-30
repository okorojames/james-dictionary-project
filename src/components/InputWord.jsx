import React from "react";

const InputWord = ({ setText, getWordMeaning }) => {
  return (
    <div className="inputFormDiv">
      <form className="inputWordForm" onSubmit={getWordMeaning}>
        <input
          type="text"
          className="searchWordInput"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <i
          className="ri-search-line searchWordIcon"
          onClick={getWordMeaning}
        ></i>
      </form>
    </div>
  );
};

export default InputWord;
