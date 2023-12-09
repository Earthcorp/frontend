import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-[1px] p-4">
      <div className="justify-between items-center max-w-full mx-auto md:flex text-center">
        <p className="text-headingColor text-sm font-[500]">
          Copyright &copy; {year} <a href="/">Earthcorp</a> | All rights
          reserved.
        </p>
        <p className="text-headingColor text-sm font-[500]">
          <a href="privacy-policy">Privacy Policy</a> |{" "}
          <a href="terms-conditions">Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
}
