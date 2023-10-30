import React from "react";

const Synonyms = ({ meaning }) => {
  return (
    <>
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
          meaning.synonyms.map((synonym, i) => (
            <p
              key={i}
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
    </>
  );
};

export default Synonyms;
