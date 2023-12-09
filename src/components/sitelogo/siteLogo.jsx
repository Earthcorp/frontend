import React from "react";
import logoImg from "../../assets/images/logo.png";

function siteLogo() {
  return (
    <div className="flex items-center gap-[10px] mb-6">
      <span className="w-[38px] h-[auto] flex items-center justify-center">
        <figure>
          <img src={logoImg} alt="logo" />
        </figure>
      </span>
      <div className="leading-[20px]">
        <h2 className="text-2xl text-headingColor font-[700]">Earthcorp</h2>
        <p className="text-headingColor text-md font-[500]">
          IT Support & Services
        </p>
      </div>
    </div>
  );
}

export default siteLogo;
