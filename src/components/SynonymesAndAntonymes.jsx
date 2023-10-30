import React from "react";
import Synonyms from "./Synonyms";
import Antonymes from "./Antonymes";

const SynonymesAndAntonymes = ({ wordMeaning, meanings }) => {
  return (
    <>
      <div className="synonymsAntonyms">
        {/*  */}
        {wordMeaning.meanings &&
          meanings.map((meaning, i) => <Synonyms key={i} meaning={meaning} />)}
        {/* Antonymns */}
        {wordMeaning.meanings &&
          meanings.map((meaning, i) => <Antonymes key={i} meaning={meaning} />)}
      </div>
    </>
  );
};

export default SynonymesAndAntonymes;
