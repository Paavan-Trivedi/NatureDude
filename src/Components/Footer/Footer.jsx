import React from "react";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
      <div className=" bg-black text-[white] h-[60px] py-3 text-center">
        <p>Nature Dude @{CurrentYear} All Rights Reserved </p>
      </div>
  );
};

export default Footer;
