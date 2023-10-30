import React from "react";

const ErrorEl = ({ error }) => {
  console.log(error);
  return (
    <>
      <div className="error_el">
        <h3>{error.title}</h3>
        <p>{error.message}</p>
        <p>
          {" "}
          <span>
            <i className="fa-solid fa-circle-info"></i>
          </span>{" "}
          {error.resolution}
        </p>
      </div>
    </>
  );
};

export default ErrorEl;
