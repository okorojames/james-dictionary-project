import React from "react";

const Antonymes = ({ meaning }) => {
  return (
    <>
      <div className="antonyms">
        <p
          style={{
            letterSpacing: "1.4px",
            fontWeight: "700",
            color: "#2e3642",
            marginBottom: "8px",
          }}
        >
          ANTONYMS
        </p>
        {meaning.antonyms.length > 0 &&
          meaning.antonyms.map((antonym, i) => (
            <p
              key={i}
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
    </>
  );
};

export default Antonymes;
