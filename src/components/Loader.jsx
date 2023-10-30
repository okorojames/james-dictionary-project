import React from "react";

const Loader = () => {
  return (
    <div className="skeleton_container">
      <SkeletonLoaders />
    </div>
  );
};

export default Loader;

//

const SkeletonLoaders = () => {
  return (
    <>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </>
  );
};

//

const SkeletonLoader = () => {
  return (
    <div className="skeleton_loader">
      <div className="skeleton_div_one"></div>
      <div className="skeleton_div_two"></div>
      <div className="skeleton_div_three"></div>
    </div>
  );
};
