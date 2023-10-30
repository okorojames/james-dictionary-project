import React from "react";
import Answer from "./Answer";
import Loader from "./Loader";
import ErrorEl from "./ErrorEl";

const AnswerContent = ({ wordMeaning, loading, error }) => {
  const noArticle = !wordMeaning && !error;
  //
  return (
    <div className="answer_content">
      {noArticle && <p>No content to display 😞</p>}
      {loading && <Loader />}
      {error && <ErrorEl error={error} />}
      {wordMeaning && <Answer wordMeaning={wordMeaning} />}
    </div>
  );
};

export default AnswerContent;
