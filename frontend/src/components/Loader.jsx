import React from "react";
import xloader from "../assets/xxxxx.svg";
function Loader() {
  return (
    <div className="flex justify-center h-[100vh] w-full">
      <div className="flex items-center">
        <img className="w-[100px]" src={xloader} alt="xloader" />
        <span className="font-bold">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
