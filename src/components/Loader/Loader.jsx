import React from "react";

import Spinner from "react-loader-spinner";

const Loader = () => (
  <div className="spinner">
    <Spinner type="Oval" color="black" height={35} />
  </div>
);

export default Loader;
